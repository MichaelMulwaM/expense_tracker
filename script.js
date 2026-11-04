class Expense {
    constructor(description, amount, category) {
        this.id = Date.now();
        this.description = description;
        this.amount = parseFloat(amount);
        this.category = category;
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    }

    saveToStorage() {
        localStorage.setItem("expenses", JSON.stringify(this.expenses));
    }

    addExpense(...newExpenses) {
        this.expenses = [...this.expenses, ...newExpenses];
        this.saveToStorage();
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveToStorage();
    }

    getExpensesByCategory(category) {
        if (category === "All") return this.expenses;
        return this.expenses.filter(expense => expense.category === category);
    }

    calculateTotal(expenseList = this.expenses) {
        return expenseList.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);
    }
}

const tracker = new ExpenseTracker();

const descInput = document.getElementById("desc-input");
const amountInput = document.getElementById("amount-input");
const categoryInput = document.getElementById("category-input");
const addBtn = document.getElementById("add-btn");
const expenseListEl = document.getElementById("expense-list");
const filterCategory = document.getElementById("filter-category");
const totalAmountEl = document.getElementById("total-amount");

function renderUI() {
    expenseListEl.innerHTML = "";
    
    const selectedCategory = filterCategory.value;
    const filteredExpenses = tracker.getExpensesByCategory(selectedCategory);

    filteredExpenses.forEach(expense => {
        const { id, description, amount, category } = expense;

        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${description}</strong> - $${amount.toFixed(2)} [<em>${category}</em>]</span>
            <button class="delete-btn" onclick="handleDelete(${id})">Delete</button>
        `;
        expenseListEl.appendChild(li);
    });

    const currentTotal = tracker.calculateTotal(filteredExpenses);
    totalAmountEl.textContent = currentTotal.toFixed(2);
}

addBtn.addEventListener("click", () => {
    const description = descInput.value.trim();
    const amount = amountInput.value.trim();
    const category = categoryInput.value;

    if (!description || !amount || isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid description and positive amount.");
        return;
    }

    const newExpense = new Expense(description, amount, category);
    tracker.addExpense(newExpense);

    descInput.value = "";
    amountInput.value = "";
    renderUI();
});

function handleDelete(id) {
    tracker.removeExpense(id);
    renderUI();
}

filterCategory.addEventListener("change", renderUI);

renderUI();