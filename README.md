# Shop App

This is a Node.js-based shop application

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sitati-elsis/shop-app.git
   cd shop-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Environment Variables Setup

Before running the application, you need to set up environment variables.

1. **Create a `.env` file** in the project root:

   ```sh
   touch .env
   ```

2. **Add the following variables** to the `.env` file:

   ```ini
   MONGODB_URL=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/shop
   SESSION_SECRET=your_secret_key
   ```

   - Replace `your_username` and `your_password` with your MongoDB credentials.
   - Replace `yourcluster.mongodb.net/shop` with your actual MongoDB cluster URL.
   - Set a strong `SESSION_SECRET` value.

## Running the Application

To start the server, run:

```sh
npm start
```

or if you are using nodemon (for development purposes):

```sh
npm run dev
```

## Project Structure

```
shop-app/
├── controllers/      # Controller files for handling business logic
├── middlewares/      # Middleware functions
├── models/          # Database models
├── public/          # Static assets
├── routes/          # Application routes
├── util/            # Utility functions
├── views/           # Views for templating
├── .env             # Environment variables (excluded from version control)
├── .gitignore       # Files to be ignored by Git
├── package.json     # Project metadata and dependencies
├── app.js           # Main entry point
└── README.md        # Project documentation
```

## Additional Scripts

- **Linting:**
  ```sh
  npm run lint
  ```
- **Testing:**
  ```sh
  npm test
  ```
