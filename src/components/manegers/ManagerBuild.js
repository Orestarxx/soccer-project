import React from 'react';
import css from './managerHolder.module.css'

const ManagerBuild = ({manager}) => {
    const {teamName,img} = manager;
    return (
        <div className={css.managerHolder}>
            <div className={css.teamNameHolder}>{teamName}</div>
            <img src={img} alt="Premier League`s managers" className={css.logoHolder}/>
        </div>
    );
};

export {ManagerBuild};