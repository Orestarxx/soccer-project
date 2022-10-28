import React from 'react';
import {PremierLeague} from "../components/premier League/PremierLeague";
import {TeamsWebsites} from "../components/teamsWebsites/TeamsWebsites";
import css from './mainLayOutStyle.module.css'
import {Controler} from "../components/controler/Controler";

const LayOut = () => {
    return (
        <div>
            <div className={css.teamSitesHolder}> <TeamsWebsites/></div>
            <div><Controler/></div>
            <div> <PremierLeague/></div>

        </div>
    );
};

export  {LayOut};