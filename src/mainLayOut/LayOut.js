import React from 'react';
import {PremierLeague} from "../components/premier League/PremierLeague";
import {TeamsWebsites} from "../components/teamsWebsites/TeamsWebsites";
import css from './mainLayOutStyle.module.css'
import {Controler} from "../components/controler/Controler";
import {key,key2} from "../configs/urls/urls";
import {Route,Routes} from "react-router-dom";
import {Managers} from "../components/Manegers/managers";

const LayOut = () => {
    return (
        <div className={css.main}>
            <div className={css.teamSitesHolder}> <TeamsWebsites/></div>
            <div><Controler/></div>
            <div className={css.contentHolder}>
                <div className={css.left}>
                    <div id={css.widgetLeft}
                         data-host="v3.football.api-sports.io"
                         data-key={key}
                         data-date=""
                         data-league="39"
                         data-season="2022"
                         data-theme=""
                         data-refresh="15"
                         data-show-toolbar="true"
                         data-show-errors="false"
                         data-show-logos="true"
                         data-modal-game="true"
                         data-modal-standings="true"
                         data-modal-show-logos="true">
                    </div>
                </div>
                <div className={css.right}>
                     <Routes>
                         <Route path={'/'} element={<PremierLeague/>}/>
                         <Route path={'managers'} element={<Managers/>}/>
                     </Routes>
                </div>

            </div>
            <div className={css.sub}></div>

        </div>
    );
};

export  {LayOut};