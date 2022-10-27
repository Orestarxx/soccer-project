import React, {useEffect, useState} from 'react';
import {getLeague} from "../../services/premier.league.service";
import {PremierLeagueBuild} from "./PremierLeagueBuild";
import {leagues} from "../../configs/urls";

const PremierLeague = () => {
   const [league,setLeague] = useState([]);
    console.log(league);
    useEffect(() =>{
       getLeague(leagues.PremierLeague).then(value => setLeague(value))

    },[])
    return (
        <div>
            {/*{league?.response?.map((info,index) =><PremierLeagueBuild key={index} info={info} />)}*/}

        </div>
    );
};

export {PremierLeague};