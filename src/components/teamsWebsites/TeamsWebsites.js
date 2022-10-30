import React from 'react';
import {emblems, teamsSites} from "../../configs/teamsSites/teamSites";
import css from './sitesTeamStyle.module.css'

const TeamsWebsites = () => {

    return (
        <div className={css.webSiteHolder}>
            <p>Club sites</p>
                <div><a href={teamsSites.Bournemouth}><img src={emblems.bournemouthEmblem} alt="football"
                                                           className={css.emblem}/></a></div>
                <div><a href={teamsSites.Arsenal}><img src={emblems.arsenalEmblem} alt="football"
                                                       className={css.emblem}/></a></div>
                <div><a href={teamsSites.AstonVilla}><img src={emblems.astonVillaEmblem} alt="football"
                                                          className={css.emblem}/></a></div>
                <div><a href={teamsSites.Brentford}><img src={emblems.brentfordEmblem} alt="football"
                                                         className={css.emblem}/></a></div>
                <div><a href={teamsSites.Brighton}><img src={emblems.brightonEmblem} alt="football"
                                                        className={css.emblem}/></a></div>
                <div><a href={teamsSites.Chelsea}><img src={emblems.chelseaEmblem} alt="football"
                                                       className={css.emblem}/></a></div>
                <div><a href={teamsSites.CrystalPalace}><img src={emblems.crystalPalaceEmblem} alt="football"
                                                             className={css.emblem}/></a></div>
                <div><a href={teamsSites.Everton}><img src={emblems.evertonEmblem} alt="football"
                                                       className={css.emblemE}/></a></div>
                <div><a href={teamsSites.Fulham}><img src={emblems.fulhamEmblem} alt="football" className={css.emblem}/></a>
                </div>
                <div><a href={teamsSites.LeedsUnited}><img src={emblems.leedsUnitedEmblem} alt="football"
                                                           className={css.emblem}/></a></div>
                <div><a href={teamsSites.LeicesterCity}><img src={emblems.leicesterCityEmblem} alt="football"
                                                             className={css.emblem}/></a></div>
                <div><a href={teamsSites.Liverpool}><img src={emblems.liverpoolEmblem} alt="football"
                                                         className={css.emblem}/></a></div>
                <div><a href={teamsSites.ManchesterCity}><img src={emblems.manchesterCityEmblem} alt="football"
                                                              className={css.emblem}/></a></div>
                <div><a href={teamsSites.ManchesterUnited}><img src={emblems.manchesterUnitedEmblem} alt="football"
                                                                className={css.emblem}/></a></div>
                <div><a href={teamsSites.NewcastleUnited}><img src={emblems.newcastleUnitedEmblem} alt="football"
                                                               className={css.emblem}/></a></div>
                <div><a href={teamsSites.NottinghamForest}><img src={emblems.nottinghamForestEmblem} alt="football"
                                                                className={css.emblem}/></a></div>
                <div><a href={teamsSites.Southampton}><img src={emblems.southamptonEmblem} alt="football"
                                                           className={css.emblem}/></a></div>
                <div><a href={teamsSites.TottenhamHotspur}><img src={emblems.tottenhamHotspurEmblem} alt="football"
                                                                className={css.emblem}/></a></div>
                <div><a href={teamsSites.WestHamUnited}><img src={emblems.westHamUnitedEmblem} alt="football"
                                                             className={css.emblem}/></a></div>
                <div><a href={teamsSites.Wolverhampton}><img src={emblems.wolverhamptonEmblem} alt="football"
                                                             className={css.emblem}/></a></div>
        </div>
    );
};

export  {TeamsWebsites};