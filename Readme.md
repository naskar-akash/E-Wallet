# E-WALLET
A full-stack application built with React(frontend) and NodeJS/Express/MongoDB (Backend). This app is built mainly for _Tutors_ such that he/she can register, login, and set his students' detalits in this app. 

---

## Features
- User registration and then login with secure authentication
- Create or delete students and set their details
- Student details will be arranged in tabular form
- Student details can be edited
- Responsive design such that one can handle this app from his/her handset
- Error and status message handling across pages

---

## Getting Started
### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

---

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `server` folder:
     ```
     NODE_ENV=development
     MONGO_URI=your_mongodb_connection_string
     FRONTEND_URL=your_frontend_url
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend runs on `http://localhost:3000` by default.

---   

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```

2. **Configure environment variables:**
   - Edit `.env` in the `client` folder:
     ```
     VITE_API_URL=http://localhost:3000
     ```

3. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

---