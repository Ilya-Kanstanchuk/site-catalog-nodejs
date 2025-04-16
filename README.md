# Site Catalog (Node.js + Express + Vanilla JS)

A simple web catalog application built using **Node.js**, **Express.js**, **MongoDB**, and **vanilla JavaScript** on the frontend. Users can view, add, and manage items in a basic catalog.

##  Features

- Server-side rendering using **EJS**
- Item management (add, delete)
- RESTful routing
- MongoDB integration
- Modular code structure following MVC pattern
- Static assets served with Express

##  Project Structure

```
site-catalog-nodejs/
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── public/             # Static files (CSS, JS, images)
├── routers/            # Application routes
├── views/              # EJS templates
├── .gitignore
├── package.json
└── server.js           # Main app entry
```

##  Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Templating**: EJS

##  Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Ilya-Kanstanchuk/site-catalog-nodejs.git
   cd site-catalog-nodejs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

4. **Run the server**:
   ```bash
   node server.js
   ```

5. Open your browser at [http://localhost:3000](http://localhost:3000)

## Links

- Live site URL: https://site-catalog-nodejs.onrender.com/

##  License

MIT License

---

> Created by [Ilya Kanstanchuk](https://github.com/Ilya-Kanstanchuk)
