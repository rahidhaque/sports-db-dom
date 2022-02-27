const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showPlayer(data.player))
    // console.log(url);
}

const showPlayer = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border">
            <div class="pro-pic">
                <img class="w-25" src="${player.strThumb}" alt="">
            </div>
            <h2>Name: ${player.strPlayer}</h2>
            <h5>Country: ${player.strNationality}</h5>
            <div class="all-button">
                <button class="btn btn-danger">Delete</button>
                <button onclick="playerDetails(${player.idPlayer})" class="btn btn-success">Details</button>
            </div>
        </div>`;
        parent.appendChild(div);
        // console.log(player);
    }
}

const playerDetails = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setPlayerDetails(data.players[0]))
}

const setPlayerDetails = (info) => {
    document.getElementById('details-container').innerHTML = `
        <div>
        <h6>Details: ${info.strDescriptionEN}</h6>
        <a href="https://${info.strInstagram}">
         <img src="images/instagram.png"
         >
      </a>
        </div>
    `
}