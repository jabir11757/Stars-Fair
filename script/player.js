function getAllPlayer(eventId) {

    const selectedPlayer = document.querySelectorAll('#player-order-list li');
    if (selectedPlayer.length < 5) {
        const playerNameField = document.getElementById(eventId);
        const playerName = playerNameField.innerText;

        const playerListField = document.createElement('li');
        playerListField.innerText = playerName;
        document.getElementById('player-order-list').appendChild(playerListField);
    }
    else {
        alert("You don't have access to choose more")
    }
}

document.getElementById('btn-mashrafi').addEventListener('click', function () {
    getAllPlayer('mashrafi');
    document.getElementById('btn-mashrafi').setAttribute("disabled", "");
})

document.getElementById('btn-sakib').addEventListener('click', function () {
    getAllPlayer('sakib');
    document.getElementById('btn-sakib').setAttribute("disabled", "");
})

document.getElementById('btn-mahmudullah').addEventListener('click', function () {
    getAllPlayer('mahmudullah');
    document.getElementById('btn-mahmudullah').setAttribute("disabled", "");
})

document.getElementById('btn-mushfiq').addEventListener('click', function () {
    getAllPlayer('mushfiq');
    document.getElementById('btn-mushfiq').setAttribute("disabled", "");
})

document.getElementById('btn-sabbir').addEventListener('click', function () {
    getAllPlayer('sabbir');
    document.getElementById('btn-sabbir').setAttribute("disabled", "");
})

document.getElementById('btn-bijoy').addEventListener('click', function () {
    getAllPlayer('bijoy');
    document.getElementById('btn-bijoy').setAttribute("disabled", "");
})

document.getElementById('btn-tamim').addEventListener('click', function () {
    getAllPlayer('tamim');
    document.getElementById('btn-tamim').setAttribute("disabled", "");
})

document.getElementById('btn-sohan').addEventListener('click', function () {
    getAllPlayer('sohan');
    document.getElementById('btn-sohan').setAttribute("disabled", "");
})













// function includeAllFunction(eventId, value) {
//     document.getElementById(eventId).addEventListener('click', function () {
//         getAllPlayer(value);
//     }
//     )
// }

// includeAllFunction('btn-mashrafi', 'mashrafi');
// includeAllFunction('btn-sakib', 'sakib');
// includeAllFunction('btn-mahmudullah', 'mahmudullah');
// includeAllFunction('btn-mushfiq', 'mushfiq');
// includeAllFunction('btn-sabbir', 'sabbir');
// includeAllFunction('btn-bijoy', 'bijoy');
// includeAllFunction('btn-anamul', 'anamul');
// includeAllFunction('btn-haque', 'haque');