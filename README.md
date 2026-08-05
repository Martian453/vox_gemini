# Vox – Real-Time Multilingual Chat Application

**Academic Group Project | Associated with a Published Indian Patent Application**

Vox is a real-time multilingual chat application developed as part of an academic group project to facilitate seamless communication between users speaking different languages. The application automatically translates messages into each recipient's preferred language, enabling users to converse naturally without language barriers.

By integrating real-time messaging with AI-powered translation, Vox provides an intuitive communication platform where users can exchange messages instantly while receiving translations in their selected language.

---

## Project Description

Vox was developed to address one of the most common challenges in digital communication—language differences. The application combines real-time messaging with AI-assisted translation, allowing users to communicate in their native languages while the system automatically translates messages for other participants.

The application uses Socket.IO to establish real-time communication between users, ensuring low-latency message delivery. Whenever a message is sent, the backend processes the request and forwards the text to the Google Gemini API for translation. The translated message is then delivered instantly to the recipient in their preferred language, creating a seamless multilingual chat experience.

The project was initially conceptualized as a context-aware multilingual messaging platform capable of utilizing conversation history to improve translation quality. During development, our group explored approaches involving custom language translation models. However, due to the computational requirements, dataset availability, and project timeline, the implemented version focuses on reliable real-time translation using the Google Gemini API. Context-aware translation remains a potential enhancement for future development.

Vox provided practical experience in full-stack web development, real-time communication, AI API integration, and collaborative software development. The innovation behind the project led to the publication of an Indian patent application.

---

## Features

- Real-time messaging
- Automatic multilingual text translation
- AI-powered translation using the Google Gemini API
- Support for multiple languages
- Low-latency communication with Socket.IO
- Local network support for development and testing
- Responsive and user-friendly interface

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Real-Time Communication
- Socket.IO

### AI Integration
- Google Gemini API

### Development Tools
- Git
- GitHub
- Visual Studio Code

---

## How It Works

1. A user joins the chat application and selects a preferred language.
2. Messages are exchanged instantly using Socket.IO.
3. The backend receives each message and forwards it to the Google Gemini API.
4. Gemini translates the message into the recipient's preferred language.
5. The translated message is delivered in real time, allowing users to communicate seamlessly despite language differences.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Martian453/vox_gemini
cd vox_gemini
```

### Install Dependencies

Install dependencies for both the frontend and backend.

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### Start the Backend

```bash
cd backend
npm run dev
```

### Start the Frontend

```bash
cd frontend
npm run dev
```

---

## Challenges

One of the project's initial objectives was to implement context-aware multilingual translation capable of improving translation quality by utilizing previous conversation history. Our group also explored the possibility of developing a custom language translation model.

However, training and deploying such a model required extensive multilingual datasets, significant computational resources, and considerable development time. To ensure the successful completion of the project within the available timeline, we integrated the Google Gemini API to provide accurate real-time translations while focusing on building a reliable multilingual chat application.

---

## Future Enhancements

- Context-aware translation using conversation history
- Automatic language detection
- Voice-to-text messaging
- Text-to-speech support
- Group chat functionality
- User authentication and user profiles
- Cloud deployment
- Mobile application support

---

## Patent Publication

The concept behind **Vox** is associated with a **published Indian patent application** developed as part of this academic group project.

**Title:** *Frame Work for Real-Time Multilingual Messaging Using Large Language Models*

**Application Number:** **202541111770 A**

**Publication Date:** **05 December 2025**

**Status:** **Patent Application Published (India)**

---

## Contributors

This project was developed as part of an academic group project.

- Rohan Singh V
- Sharvani S
- Shreya Jadhav
- Swayam Jevoor

---

## Acknowledgements

- Google Gemini API for AI-powered multilingual translation.
- Socket.IO for enabling real-time communication.
- Sai Vidya Institute of Technology and Management for supporting the project.
- Our faculty mentors and teammates for their valuable guidance and collaboration.
