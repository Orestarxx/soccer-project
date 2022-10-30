import React from 'react';
import {teamsManager} from "../../data/managers/managers";
import {ManagerBuild} from "./ManagerBuild";
import css from './managerHolder.module.css'

const Managers = () => {
    return (
        <div className={css.mainManagersHolder}>
            {teamsManager.map(manager =><ManagerBuild manager={manager} key={manager.team}/>)}
        </div>
    );
};

export {Managers};