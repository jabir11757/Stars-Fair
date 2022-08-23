// var playerExpense = 0;
document.getElementById('calculate').addEventListener('click', function () {
    const playerCostField = document.getElementById('player-cost');
    const perPlayerCost = parseInt(playerCostField.value);


    playerExpense = perPlayerCost * 5;
    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerText = playerExpense;

    playerCostField.value = '';

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const managerCostField = document.getElementById('manager-field');
    const managerCost = parseInt(managerCostField.value);
    managerCostField.value = '';

    const coachCostField = document.getElementById('coach-field');
    const coachCost = parseInt(coachCostField.value);
    coachCostField.value = '';

    totalCost = managerCost + coachCost + playerExpense;
    document.getElementById('total-cost').innerText = totalCost;
})