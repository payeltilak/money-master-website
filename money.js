function getInputId(input) {
    const inputValue = document.getElementById(input);
    const fieldValue = parseFloat(inputValue.value);
    if (isNaN(fieldValue) || fieldValue < 0) {
        return alert('Please Enter the valid number');
    }
    else {
        return fieldValue;
    }

}
function currentBalance() {
    const income = getInputId('income')
    const expenses = getInputId('food') + getInputId('total-rent') + getInputId('cloths');
    const totalExpenses = document.getElementById('total-expenses').innerText = expenses;
    const balanceUpdate = document.getElementById('balance').innerText = (income - totalExpenses)
    return balanceUpdate;
}

document.getElementById('calculation-button').addEventListener('click', function () {
    currentBalance();
    //     const incomeAmount = document.getElementById('income');
    //     const incomeValue = parseFloat(incomeAmount.value);

    //     const foodCost = document.getElementById('food');
    //     const foodValue = parseFloat(foodCost.value);

    //     const totalRent = document.getElementById('total-rent');
    //     const rentValue = parseFloat(totalRent.value);

    //     const clothsCost = document.getElementById('cloths');
    //     const clothsValue = parseFloat(clothsCost.value);


    //     // total expenses calculation

    //     const Expenses = document.getElementById('total-expenses')

    //     let total = foodValue + rentValue + clothsValue;
    //     const expensesMoney = parseFloat(Expenses.innerText);
    //     Expenses.innerText = total;


    //     // balance
    //     const updateBalance = document.getElementById('balance');
    //     updateBalance.innerText = incomeValue - total;
})

// savings
document.getElementById("save-button").addEventListener('click', function () {
    // console.log('payel')
    const saveInput = getInputId('save-input');
    console.log(saveInput)
    const income = getInputId('income');
    console.log(income)
    const balance = currentBalance();
    console.log(balance)
    const saveAmount = (income * saveInput) / 100;
    console.log(saveAmount)
    if (saveAmount > balance) {
        alert('I have no enough money')

    }
    else {
        const saveBalance = document.getElementById('saving-amount').innerText = saveAmount;

        const remainingBalance = document.getElementById('remaining-balance').innerText = balance - saveAmount;
    }


})


