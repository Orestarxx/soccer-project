import React, {useEffect, useState} from 'react';
import {getLeague} from "../../services/premier.league.service";
import {PremierLeagueBuild} from "./PremierLeagueBuild";

const PremierLeague = () => {
   const [league,setLeague] = useState([]);
    console.log(league);
    useEffect(() =>{
       getLeague().then(value => setLeague(value))

    },[])
    return (
        <div>
            {league?.response?.map(info =><PremierLeagueBuild key={info.id} info={info} />)}
        </div>
    );
};

export {PremierLeague};