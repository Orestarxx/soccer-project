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
export {getLeague}