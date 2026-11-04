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

    //accept multiple expenses
    addExpense(...newExpenses) {
        this.expenses = [...this.expenses, ...newExpenses];
        this.saveToStorage();
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveToStorage();
    }