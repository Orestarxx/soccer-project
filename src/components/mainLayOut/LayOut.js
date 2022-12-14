import React from 'react';
import {PremierLeague} from "../premier League/PremierLeague";
import {TeamsWebsites} from "../teamsWebsites/TeamsWebsites";
import css from './mainLayOutStyle.module.css'
import {Controler} from "../controler/Controler";
import {key,key2} from "../../configs/urls/urls";
import {Route,Routes} from "react-router-dom";
import {Managers} from "../teamManagers/managers/Managers";
import {ManagersDetails} from "../teamManagers/managersDetails/ManagersDetails";

const LayOut = () => {
    return (
        <div className={css.main}>
            <div className={css.teamSitesHolder}> <TeamsWebsites/></div>
            <div><Controler/></div>
            <div className={css.contentHolder}>
                <div className={css.left}>
                    {/*<div id={css.widgetLeft}*/}
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
                    <div id="wg-api-football-standings"
                         data-host="v3.football.api-sports.io"
                         data-key={key}
                         data-league="39"
                         data-team=""
                         data-season="2022"
                         data-theme=""
                         data-show-errors="false"
                         data-show-logos="true"
                         className="wg_loader">
                    </div>
                </div>
                <div className={css.right}>
                     <Routes>
                         <Route path={'/'} element={<PremierLeague/>}/>
                         <Route path={'managers'} element={<Managers/>}/>
                         <Route path={'managers/:id'} element={<ManagersDetails/>}/>
                     </Routes>
                </div>

            </div>
            <div className={css.sub}></div>

        </div>
    );
};

export  {LayOut};