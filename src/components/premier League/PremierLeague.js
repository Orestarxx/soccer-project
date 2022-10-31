import React, {useEffect, useState} from 'react';
import {getLeague, getLeagues, managers} from "../../services/premier.league.service";
import {PremierLeagueBuild} from "./PremierLeagueBuild";
import {leagues} from "../../configs/urls/urls";
import {teamsId} from "../../configs/teamsId/teamsId";

const PremierLeague = () => {
   const [league,setLeague] = useState([]);
   //  console.log(league);
    useEffect(() =>{
       // getLeague(leagues.PremierLeague).then(value => console.log(value))
       //  managers(teamsId.TottenhamID).then(value => console.log(value))

    },[])
    return (
        <div>
            {/*{league?.response?.map((info,index) =><PremierLeagueBuild key={index} info={info} />)}*/}
           gearhhhhhgdhadfhadfh

        </div>
    );
};

export {PremierLeague};