import React, {useEffect, useState} from 'react';
import {getLeague} from "../../services/premier.league.service";
import {PremierLeagueBuild} from "./PremierLeagueBuild";
import {key, leagues} from "../../configs/urls";

const PremierLeague = () => {
   const [league,setLeague] = useState([]);
    console.log(league);
    useEffect(() =>{
       getLeague(leagues.PremierLeague).then(value => setLeague(value))

    },[])
    return (
        <div>
            {/*{league?.response?.map((info,index) =><PremierLeagueBuild key={index} info={info} />)}*/}
            {/*<div id="wg-api-football-games"*/}
            {/*     data-host="v3.football.api-sports.io"*/}
            {/*     data-key={key}*/}
            {/*     data-date=""*/}
            {/*     data-league="39"*/}
            {/*     data-season="2022"*/}
            {/*     data-theme=""*/}
            {/*     data-refresh="15"*/}
            {/*     data-show-toolbar="true"*/}
            {/*     data-show-errors="false"*/}
            {/*     data-show-logos="true"*/}
            {/*     data-modal-game="true"*/}
            {/*     data-modal-standings="true"*/}
            {/*     data-modal-show-logos="true">*/}
            {/*</div>*/}
        </div>
    );
};

export {PremierLeague};