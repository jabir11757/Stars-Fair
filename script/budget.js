document.getElementById('calculate').addEventListener('click', function () {
    const playerCostField = document.getElementById('player-cost');
    const perPlayerCost = playerCostField.value;

    const playerCost = perPlayerCost * 5;
    const playerExpenseField = document.getElementById('player-expense');
    playerExpenseField.innerText = playerCost;

    playerCostField.value = '';




})