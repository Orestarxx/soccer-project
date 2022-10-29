import {_url, key} from "../configs/urls";
import {fromDateFormated, toDateFormated} from "../formateDate/date";


const getLeague = (id) =>{
    return fetch(`${_url}?league=${id}&season=2022&from=${fromDateFormated}&to=${toDateFormated}`,{
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": key
        }
    })
        .then(value => value.json())

}


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '10335f4187msh93b8c42039a8a6dp15ededjsnaa89b5f4103f',
//         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//     }
// };
//
//  const getLeagues = () => {
//      return fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options)
//          .then(response => response.json())
//          .then(response => console.log(response))
//  }






const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0b488ca45msh59a8e60860e3a9ep17ae6cjsnebeb11807746',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

 const getLeagues = () =>{
     return fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options)
    .then(response => response.json())

 }





//
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'd90f51bbf2msh5283929ac959fa0p16f940jsna2bf286a8ecf',
//         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//     }
// };
//
// fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export {getLeague,getLeagues}