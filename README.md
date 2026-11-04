# Student Expense Tracker

## About the Project

The Expense Tracker is a web application built using vanilla JavaScript to help users manage, track, and analyze their daily spending. 

Users can add expenses with a description, amount, and category, view all recorded items in an organized list, filter expenses by category, delete entries, and dynamically calculate total daily spending.

## Live Demo

**Live Website:** [View Live App](https://michaelmulwam.github.io/expense_tracker/)

## Features

- **Add Expenses:** Record new expenses using a description, amount, and category.
- **View Expenses:** Display all recorded expenses in a clean, structured list.
- **Delete Expenses:** Remove individual expenses from the list instantly.
- **Category Filtering:** Filter expenses dynamically by Food, Transport, Supplies, Entertainment, or Other.
- **Daily Total Calculation:** Automatically compute and display total spending using functional array methods.
- **Persistent Storage:** Save expenses using browser `localStorage` so data remains available after refreshing the page.

## Technologies Used

- **HTML5:** Structures the application UI.
- **CSS3:** Styles the layout and presentation.
- **JavaScript (ES6+):** Handles core logic, OOP classes, and DOM manipulation.
- **Local Storage:** Persists expense records across browser sessions.
- **Git & GitHub Pages:** Version control and live deployment.

## Project Structure

    expense-tracker/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

## How to Use

1. Open the Expense Tracker website.
2. Enter a description for your expense in the text field.
3. Enter the amount spent.
4. Select the appropriate expense category from the dropdown.
5. Click the **Add Expense** button to record it.
6. Use the **Filter Category** dropdown to view specific spending groups.
7. Click the **Delete** button next to any item to remove it.
8. Monitor the real-time total update at the bottom of the screen.

## Learning Objectives & Technical Implementation

This project was built to practice and demonstrate proficiency in:

- **Object-Oriented Programming (OOP):** Utilizing JavaScript classes (`Expense` and `ExpenseTracker`) to structure data and manage state.
- **Functional Programming:** Applying array methods (`map`, `filter`, `reduce`) to manipulate and calculate expense data.
- **ES6+ Features:** Utilizing object destructuring, spread (`...`) and rest operators, and arrow functions.
- **DOM Manipulation:** Dynamically rendering UI elements and handling user event listeners.
- **Data Persistence:** Interfacing with browser `localStorage` using JSON parsing and stringifying.
- **Version Control & Deployment:** Managing code with Git and deploying live via GitHub Pages.

## Author

**Michael Mulwa**