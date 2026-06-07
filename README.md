# User Management System

A React + TypeScript application that fetches user data from an API, manages it with Redux Toolkit, and supports full CRUD operations.

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- React Redux
- React Router v6
- Vite

## Features

- Fetches initial user data from JSONPlaceholder API
- View all users in a responsive grid
- View individual user details
- Add new users
- Edit existing users
- Delete users
- Loading and error states
- All add, edit and delete operations managed locally in Redux


## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at `http://localhost:5173`

## Pages

| Route | Description |
|-------|-------------|
| /users | List of all users |
| /users/:id | Individual user details |
| /add-user | Form to add a new user |
| /edit-user/:id | Form to edit an existing user |

## How It Works

- On load, the app fetches 10 users from the JSONPlaceholder API
- User data is stored in a Redux slice and shared across all pages
- Adding, editing and deleting users updates the Redux state locally
- No POST, PUT or DELETE requests are made to the API