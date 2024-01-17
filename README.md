### Secret Sharing App

## Demo Link : https://streamable.com/nafekb

## Overview

This is a Secret Sharing App that allows users to share and view secret messages in a secure environment. The app implements robust user authentication features, including JWT-based authentication, bcrypt for password hashing, and email functionality for account management.

## Features

- **User Authentication:**
  - Register: Create a new account with a valid email address and password.
  - Login: Authenticate users with their credentials.
  - Forgot Password: Send password reset links to the user's email.
  - Reset Password: Change the password using the reset link.
  [Note : For Testing Purpose, the reset link will be provided in the console, using that link u can change the password. If you have the correct credential you also send the link in mail]

- **Secret Sharing:**
  - Post Your Secret: Share a secret message securely.
  - List of Posts: View a list of secret messages posted by users.

## Tech Stack

### Client

- React
- Material-UI
- Emotion (CSS-in-JS)
- Redux Toolkit
- React Router
- Vite

### Server

- Node.js
- Express
- MongoDB (with Mongoose)
- JSON Web Tokens (jsonwebtoken)
- Bcrypt
- Nodemailer

## Setup

### Client & Server

# Create a .env file in server folder to hold the secret variables
```bash
PORT = 8000
DATABASE_URL = "your-db-url"
JWT_SECRET_KEY="any-secert-key"
EMAIL_HOST ="smtp.gmail.com"
EMAIL_POST = 587
EMAIL_USER= 'your-email-user'
EMAIL_PASS = 'your-password'
EMAIL_FROM = 'your-email-id'
```
```bash
# Install dependencies
npm install

# Run development server
npm run dev


