// backend/src/lib/socket.js
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// Store mapping between userId ↔ socketId
const userSocketMap = new Map();

export const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      const allowed = !origin ||
        origin.startsWith("http://localhost") ||
        origin.startsWith("http://192.168.") ||
        origin.endsWith(".vercel.app");

      if (allowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("🔌 New connection:", socket.id);

  // register from query param if provided (safe fallback)
  const queryUserId =
    socket.handshake?.query?.userId || socket.handshake?.auth?.userId;
  if (queryUserId) {
    userSocketMap.set(String(queryUserId), socket.id);
    console.log(
      `✅ (from query) Registered user ${String(queryUserId)} -> ${socket.id}`
    );
  }

  // explicit register event
  socket.on("register", (userId) => {
    if (userId) {
      userSocketMap.set(String(userId), socket.id);
      console.log(`✅ Registered user ${String(userId)} with socket ${socket.id}`);
    }
  });

  socket.on("disconnect", () => {
    for (const [userId, sockId] of userSocketMap.entries()) {
      if (sockId === socket.id) {
        userSocketMap.delete(userId);
        console.log(`❌ Disconnected user ${userId}`);
        break;
      }
    }
  });
});

// Helper to get a user’s socketId
export const getReceiverSocketId = (receiverId) => {
  const socketId = userSocketMap.get(String(receiverId));
  console.log(`🔍 getReceiverSocketId: Looking for ${receiverId}, Found: ${socketId}`);
  return socketId;
};

// ✅ Export both app and server
export { server };
export default app;
