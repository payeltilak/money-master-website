document.getElementById('calculation-button').addEventListener('click', function () {
    const incomAmount = document.getElementById('income');
    const incomeValue = parseFloat(incomAmount.value);

    const foodCost = document.getElementById('food');
    const foodValue = parseFloat(foodCost.value);

    const totalRent = document.getElementById('total-rent');
    const rentValue = parseFloat(totalRent.value);

    const clothsCost = document.getElementById('cloths');
    const clothsValue = parseFloat(clothsCost.value);

    // total expenses calculation
    let total = foodValue + rentValue + clothsValue;
    console.log(total)

})