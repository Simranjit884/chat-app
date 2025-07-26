# Chat App

A full-stack real-time chat application built with ReactJS, Express, MongoDB, and Socket.io. This project allows users to sign up, log in, chat in real time, and update their profiles.

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.io
- Profile management with image upload (Cloudinary)
- Responsive UI with ReactJS
- Sidebar with online users
- Protected routes and JWT-based auth
- Environment-based configuration

## Tech Stack

- **Frontend:** ReactJS, Vite, Axios, DaisyUI, HTML, CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, Cloudinary
- **Deployment:** Render.com

## Folder Structure

```
chat-app/
  backend/         # Express backend API and Socket.io server
    src/
      controllers/ # Route controllers
      lib/         # DB, socket, cloudinary, utils
      middleware/  # Auth middleware
      models/      # Mongoose models
      routes/      # Express routes
      seeds/       # Seed scripts
    package.json
  frontend/        # ReactJS frontend
    src/
      components/  # React components
      constants/   # App constants
      lib/         # Axios instance, utils
      pages/       # Page components
      store/       # Zustand stores
    package.json
  package.json     # Monorepo root
```

## Getting Started (Local)

### Prerequisites

- Node.js (v20 recommended)
- npm
- MongoDB Atlas or local MongoDB
- Cloudinary account (for image uploads)

### 1. Clone the repository

```sh
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Set up environment variables

Create a `.env` file in `backend/` with the following:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### 3. Install dependencies

```sh
npm install --prefix backend
npm install --prefix frontend
```

### 4. Run the backend

```sh
cd backend
npm run dev
```

### 5. Run the frontend

Open a new terminal:

```sh
cd frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5001/api

## Deployment on Render.com

1. Push your code to GitHub.
2. Create two web services on Render:
   - **Backend:**
     - Root Directory: `backend`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Add environment variables as above
   - **Frontend:**
     - Root Directory: `frontend`
     - Build Command: `npm install && npm run build`
     - Start Command: `npm run preview`
3. Set up environment variables in Render dashboard for both services.
4. For full-stack deployment, you can also use a monorepo setup and serve the frontend from the backend in production (see `backend/src/index.js`).

## Environment Variables

| Variable              | Description                   |
| --------------------- | ----------------------------- |
| PORT                  | Backend server port           |
| MONGODB_URI           | MongoDB connection string     |
| JWT_SECRET            | JWT secret for authentication |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name         |
| CLOUDINARY_API_KEY    | Cloudinary API key            |
| CLOUDINARY_API_SECRET | Cloudinary API secret         |
| NODE_ENV              | Set to `production` on Render |

---

**Feel free to contribute or open issues!**
