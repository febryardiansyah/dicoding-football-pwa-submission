const loadStandings =()=>{
    loadingIndicator()
          const listStandings = getStandings()
          if('caches' in window){
            caches.match(`${url}competitions/2001/standings?standingType=TOTAL`)
            .then(function(respnse){
              respnse.json().then(data=>{
                teamData =data
                standingsDataResponse(data)
              })
            })
          }
          listStandings.then(data => {
              standingsDataResponse(data)
          })
  }
  
  const standingsDataResponse = (data) =>{
    const contentElement = document.getElementById('body-content')
  
    data.standings.forEach(standing =>{
      var listDetail = ''
      standing.table.forEach(result=>{
          listDetail +=  `<tr>
          <td>${result.position}</td>
          <td><img class="responsive-img" width="24" height="24" src="${ result.team.crestUrl || 'img/empty_badge.svg'}" alt="notfound"> ${result.team.name}</td>
          <td>${result.playedGames}</td>
          <td>${result.won}</td>
          <td>${result.draw}</td>
          <td>${result.lost}</td>
          <td>${result.goalsFor}</td>
          <td>${result.goalsAgainst}</td>
          <td>${result.goalDifference}</td>
          <td>${result.points}</td>
        </tr>`
      })
      contentElement.innerHTML +=`<div class="col s12 m12">
      <div class="card">
      <div class="card-content">
      <h5 class="header">${standing.group}</h5>
      <table class="responsive-table striped">
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>${listDetail}</tbody>
      </table>
      </div>
      </div>
      </div>`
  })
  hideLoadingIndicator()
  }