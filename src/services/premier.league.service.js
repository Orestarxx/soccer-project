import {_url, key} from "../configs/urls";


const getLeague = () =>{
    return fetch(_url,{
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": key
        }
    })
        .then(value => value.json())

}
export {getLeague}