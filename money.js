
// function of input
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
// function of totalbalance
function currentBalance() {
    const income = getInputId('income')
    const expenses = getInputId('food') + getInputId('total-rent') + getInputId('cloths');
    const totalExpenses = document.getElementById('total-expenses').innerText = expenses;
    const balanceUpdate = document.getElementById('balance').innerText = (income - totalExpenses)
    return balanceUpdate;
}

document.getElementById('calculation-button').addEventListener('click', function () {
    currentBalance();

})

// savings
document.getElementById("save-button").addEventListener('click', function () {

    const saveInput = getInputId('save-input');

    const income = getInputId('income');

    const balance = currentBalance();

    const saveAmount = (income * saveInput) / 100;

    if (saveAmount > balance) {
        alert('I have no enough money')

    }
    else {
        const saveBalance = document.getElementById('saving-amount').innerText = saveAmount;

        const remainingBalance = document.getElementById('remaining-balance').innerText = balance - saveAmount;
    }
})


