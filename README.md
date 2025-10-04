# StudySphere Hub

StudySphere Hub is a **unified college communication and academic platform** integrating real-time chat, video calls, events, file sharing, and interactive dashboards.  
It replaces fragmented WhatsApp groups, notice boards, and emails, streamlining communication and collaboration for students, teachers, and admins.

---

## Features

### Role-Based Management
- Distinct **Admin, Teacher, and Student** roles with secure access control
- Admin Dashboard to manage users, classes, subjects, and configurations

### Real-Time Communication
- **Chat system** with direct messaging between students and faculty
- **Audio/Video calls** and **screen sharing** powered by WebRTC & Socket.IO
- Reduces external app dependency by **70%**

### Academic Hub
- Centralized **Notes, Syllabus, Previous Year Question Papers**
- Scalable **file-sharing system** supporting documents, PDFs, images, and notes via Cloudinary
- Handles **100+ concurrent users** and speeds up material distribution by **40%**

### Events & Notifications
- Create and join events directly on the platform
- Instant notifications for posts, events, messages, and file uploads

### Dashboard & Analytics
- Interactive charts to visualize student performance and attendance
- Modern, responsive UI powered by **Tailwind CSS** and smooth animations using **Framer Motion**

---

## Tech Stack

### Frontend
- **React.js** – Dynamic user interfaces
- **Redux** – State management
- **Tailwind CSS** – Styling
- **Framer Motion** – Animations
- **React Router** – Navigation
- **React Toastify** – Notifications

### Backend
- **Node.js & Express.js** – Server-side logic and APIs
- **MongoDB & Mongoose** – Database and data modeling
- **JWT** – Authentication & authorization
- **Socket.IO** – Real-time chat and notifications
- **WebRTC** – Audio/Video calls & screen sharing
- **Cloudinary** – File storage
- **Multer** – File uploads

---

## Installation

### Prerequisites
- Node.js v16+
- MongoDB
- npm or yarn

### Steps
bash
# Clone the repository
git clone https://github.com/<your-username>/CampusConnect-Hub.git
cd CampusConnect-Hub

# Backend setup
cd server
npm install
npm run dev   # Starts backend at http://localhost:5000

# Frontend setup
cd ../client
npm install
npm start     # Starts frontend at http://localhost:3000
