import React from 'react';
import {PremierLeague} from "../components/Premier League/PremierLeague";
import {TeamsWebsites} from "../components/teamsWebsites/TeamsWebsites";
import css from './mainLayOutStyle.module.css'

const LayOut = () => {
    return (
        <div>
            <div className={css.teamSitesHolder}> <TeamsWebsites/></div>
            <div>
                <div></div>
                <div></div>
            </div>

            <div> <PremierLeague/></div>

        </div>
    );
};

export  {LayOut};