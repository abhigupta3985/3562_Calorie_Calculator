# Project-5: Dynamic Calorie Calculator and Inventory Management System

## Overview
This project involves building a web application that scans QR codes representing food dishes, calculates their calorie counts based on constituent items, and allows dynamic adjustments to the quantities of these items. The backend manages inventory and provides CRUD APIs for managing dishes and their calorie data.

---

## Key Features

### Frontend
1. **QR Code Scanning:**
   - Read QR codes containing dish and item data.
   - Display parsed dish information with item breakdown.

2. **Dynamic Calorie Calculation:**
   - Retrieve calorie data from the backend for each constituent item.
   - Calculate and display the total calorie count.
   - Allow users to modify item quantities and see updated calorie totals in real-time.

3. **User-Friendly Interface:**
   - Intuitive UI to display and interact with dish details and calorie calculations.

### Backend
1. **Inventory Management APIs:**
   - Manage dishes and their constituent items with CRUD operations.
   - Handle calorie data updates dynamically.

2. **Database Management:**
   - Store and retrieve data for dishes and items using MongoDB.

---

## Tech Stack

### Frontend
- **HTML, CSS, JavaScript**
- **QR Code Library:** [qr-scanner](https://github.com/nimiq/qr-scanner)

### Backend
- **Node.js** with **Express.js**

### Database
- **MongoDB**

---

## Setup Instructions

### Prerequisites
1. **Node.js** (v14+ recommended)
2. **MongoDB Database**
3. **Browser with QR Code Camera Access**

### Installation Steps
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd project-5
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Set Up MongoDB:**
   - Use the provided MongoDB URI or set up your local MongoDB instance.
   - Update the database connection string in `backend/config/db.js`.

4. **Run the Backend Server:**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000`.

5. **Set Up Frontend:**
   - Open the `frontend/index.html` file in a browser.

---

## API Endpoints

### CRUD Operations for Dishes
1. **Add a Dish:**
   - **Method:** POST
   - **Endpoint:** `/api/dishes`
   - **Body:**
     ```json
     {
       "dishName": "Idli Vada Combo",
       "items": [
         { "name": "Idli", "quantity": 2, "calories": 100 },
         { "name": "Vada", "quantity": 1, "calories": 200 }
       ]
     }
     ```

2. **Update a Dish:**
   - **Method:** PUT
   - **Endpoint:** `/api/dishes/:id`

3. **Delete a Dish:**
   - **Method:** DELETE
   - **Endpoint:** `/api/dishes/:id`

4. **Get All Dishes:**
   - **Method:** GET
   - **Endpoint:** `/api/dishes`

---

## Example QR Data
```json
{
  "dishName": "Idli Vada Combo",
  "items": [
    { "name": "Idli", "quantity": 2 },
    { "name": "Vada", "quantity": 1 },
    { "name": "Sambhar", "quantity": 1 },
    { "name": "Chutney", "quantity": 1 }
  ]
}
```

---

## Deployed Application
- [Live Demo Link](#) *(https://caloriescancalculator.netlify.app/)*

---

## Group Presentation Video
- [Google Drive Video Link](#) *(Add your video link here)*

