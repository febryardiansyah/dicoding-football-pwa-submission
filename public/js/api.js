const baseUrl = 'https://api.football-data.org/v2/'
const url =baseUrl.replace(/^http:\/\//i, 'https://')
const API_KEY = 'd602f0c7923a4d75b901db1973b0cca9'

function fetchingApi(url){
    return fetch(url, {
        headers: {
            'X-Auth-Token':API_KEY
        }
    })
}
function apiStatus(response){
    if(response.status !=200){
        return Promise.reject(new Error(response.status));
    }else{
        return Promise.resolve(response);
    }
}
function responseJson(response){
    return response.json();
}
function errorResponse(response){
    console.log('error'+response);
}

const getStandings=()=>{
    return fetchingApi(url+'competitions/2001/standings?standingType=TOTAL')
    .then(apiStatus)
    .then(responseJson)
    .catch(errorResponse)
}

const getTeams =() => {
    return fetchingApi(url+'teams')
    .then(apiStatus)
    .then(responseJson)
    .catch(errorResponse)
}