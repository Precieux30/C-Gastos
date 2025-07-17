// Archivo para manejar la lógica de control de gastos

document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-display');
    let totalExpenses = 0;

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
            addExpense(expenseName, expenseAmount);
            expenseForm.reset();
        } else {
            alert('Por favor, ingrese un nombre y un monto válido.');
        }
    });

    function addExpense(name, amount) {
        const listItem = document.createElement('li');
        listItem.textContent = `${name}: $${amount.toFixed(2)}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            removeExpense(amount, listItem);
        });

        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);
        totalExpenses += amount;
        updateTotal();
    }

    function removeExpense(amount, listItem) {
        expenseList.removeChild(listItem);
        totalExpenses -= amount;
        updateTotal();
    }

    function updateTotal() {
        totalDisplay.textContent = `Total Gastos: $${totalExpenses.toFixed(2)}`;
    }
});