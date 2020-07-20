let teamData;
const loadTeams =()=>{
    loadingIndicator()
    const teams = getTeams();
    if('caches' in window){
      caches.match(`${url}teams`).then((response)=>{
        response.json().then(data=>{
          teamData = data;
          teamDataResponse(data);
        })
      })
    }
    teams.then(data =>{
      teamData = data;
      teamDataResponse(data);
  })
}
const clickedTeam =(teamId) => {
  console.log('clicked')
  var team = teamData.teams.filter(e => e.id == teamId)[0]
  saveTeam(team)
}

const teamDataResponse = (data) => {
  var teamElement = document.getElementById('body-content')
  
  data.teams.forEach(team => {
    teamElement.innerHTML+=`
    <div class="col s12 m7">
      <h2 class="header">${team.name}</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="${team.crestUrl}"onError="this.onerror=null;this.src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p><i class="material-icons">info_outline</i>\t${team.shortName}</p>
            <p><i class="material-icons">place</i>\t${team.address}</p>
            <p><i class="material-icons">email</i>\t${team.email}</p>
            <p><i class="material-icons">phone</i>\t${team.phone}</p>
            <a class="btn-floating halfway-fab waves-effect waves-light red" onClick="clickedTeam(${team.id})" id="save">
            <i class="material-icons">add</i></a>
          </div>
          <div class="card-action">
            <a href="${team.website}">${team.website}</a>
          </div>
        </div>
      </div>
    </div>`
  })
  hideLoadingIndicator();
}

