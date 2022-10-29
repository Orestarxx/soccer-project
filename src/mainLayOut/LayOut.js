import React from 'react';
import {PremierLeague} from "../components/premier League/PremierLeague";
import {TeamsWebsites} from "../components/teamsWebsites/TeamsWebsites";
import css from './mainLayOutStyle.module.css'
import {Controler} from "../components/controler/Controler";
import {key} from "../configs/urls";

const LayOut = () => {
    return (
        <div className={css.main}>
            <div className={css.teamSitesHolder}> <TeamsWebsites/></div>
            <div><Controler/></div>
            <div> <PremierLeague/></div>
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
                <div className={css.right}></div>
            </div>
            <div className={css.sub}></div>

        </div>
    );
};

export  {LayOut};