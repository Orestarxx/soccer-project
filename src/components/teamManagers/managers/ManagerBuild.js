import React from 'react';
import css from './managerHolder.module.css'
import {useNavigate} from 'react-router-dom'

const ManagerBuild = ({manager}) => {
    const {teamName,img,team} = manager;
   const navigate = useNavigate()

    return (
        <div className={css.managerHolder} onClick={() =>{navigate(team.toString())}}>
            <div className={css.teamNameHolder}>{teamName}</div>
            <img src={img} alt="Premier League`s managers" className={css.logoHolder}/>
        </div>
    );
};

export {ManagerBuild};