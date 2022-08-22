function getAllPlayer(event) {
    const playerNameField = document.getElementById(event);
    const playerName = playerNameField.innerText;

    const playerListField = document.createElement('li');
    playerListField.innerText = playerName;
    document.getElementById('player-order-list').appendChild(playerListField);
}

document.getElementById('btn-mashrafi').addEventListener('click', function () {
    getAllPlayer('mashrafi');

})
document.getElementById('btn-sakib').addEventListener('click', function () {
    getAllPlayer('sakib');

})
document.getElementById('btn-mahmudullah').addEventListener('click', function () {
    getAllPlayer('mahmudullah');

})
document.getElementById('btn-mushfiq').addEventListener('click', function () {
    getAllPlayer('mushfiq');

})
document.getElementById('btn-sabbir').addEventListener('click', function () {
    getAllPlayer('sabbir');

})
document.getElementById('btn-bijoy').addEventListener('click', function () {
    getAllPlayer('bijoy');

})
document.getElementById('btn-anamul').addEventListener('click', function () {
    getAllPlayer('anamul');

})





