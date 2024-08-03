# Node.js EJS Project Setup

This repository provides a basic structure for a Node.js project using EJS, JWT for authentication, and MongoDB for the database. This setup allows you to quickly start new projects without having to recreate the setup each time.

## Project Structure


## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-name>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the project root and add your environment variables:
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-db-name
    JWT_SECRET=your-secret-key
    ```

### Running the Application

1. Start the MongoDB server:
    ```sh
    mongod
    ```

2. Start the Node.js application:
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure and Files

### `config/db.js`


module.exports = mongoose;
