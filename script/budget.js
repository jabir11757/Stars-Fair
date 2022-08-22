var playerExpense = 0;
function print(value) {
    console.log(value);
}
document.getElementById('calculate').addEventListener('click', function () {
    const playerCostField = document.getElementById('player-cost');
    const perPlayerCost = playerCostField.value;

    playerExpense = perPlayerCost * 5;
    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerText = playerExpense;

    playerCostField.value = '';

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const managerCostField = document.getElementById('manager-field');
    const managerCost = parseInt(managerCostField.value);

    const coachCostField = document.getElementById('coach-field');
    const coachCost = parseInt(coachCostField.value);

    const subTotalCost = managerCost + coachCost;

    totalCost = subTotalCost + playerExpense;
    document.getElementById('total-cost').innerText = totalCost;
})