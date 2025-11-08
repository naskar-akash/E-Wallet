# E-WALLET
A full-stack application built with React(frontend) and NodeJS/Express/MongoDB (Backend). This app is built mainly for _Tutors_ such that he/she can set the detalits of his/her students in this app. 

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
     VITE_API_URL=your_backend_url
     ```

3. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

---

## Usage
- Register a new user and login
- Add the details of your students
- You can delete a student and update the student details
- Filter by name of students and by payment status 
- All actions show status messages for feedback

---

## Folder Structure

```
TodoAppNew/
├── client/         # React frontend
│   ├── src/
│   │   ├── Components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
├── server/         # Node.js/Express backend
|   ├── config/
|   ├── controller/
|   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── util/
│   ├── app.js
│   └── .env
└── README.md
```

---

## Api Endpoints

- `POST/user/register` — Register new user
- `POST/user/login` — Login registered user
- `POST/user/logout` — Logout user
- `GET/students/` — Get all students 
- `GET/students/:id` — Get a student by id
- `POST/students/create` — Adding a new student with details
- `PUT/students/update/:id` — Update students
- `DELETE/students/delete/:id` — Delete students

---

## Technologies used

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT

---

## Preview

If you want to show or use the app try the link `https://e-wallet-app-ky36.onrender.com`
- *Note: This app has been deployed through `https://render.com/`. Currently I have no paid plans on this platform. Maybe this have led to a problem that my cookies are not storing into the browser. But I don't have such kind of problem when I run this app locally.

## Author

Made by Akash Naskar
