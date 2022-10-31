import React from 'react';
import css from './managersDetails.module.css'

const ManagersDetailsBuild = ({manager}) => {
    const {age, birth, name, nationality, photo, team} = manager;
    return (
        <div className={css.managerCard}>
            <div className={css.managerInfoHold}>
                <div className={css.managerPhoto}><img src={photo} alt="Managers"/></div>
                <div className={css.infoHolder}>
                    <div><b>Name:</b>{name}</div>
                    <div><b>Age:</b>{age}</div>
                    <div><b>Birth:</b>{birth.date}</div>
                    <div><b>Country:</b>{nationality}</div>
                </div>
            </div>
            <div className={css.teamLogoHolder}>
                <img src={team.logo} alt="teamLogo"/>
                <h3>{team.name}</h3>
            </div>
        </div>
    );
};

export {ManagersDetailsBuild};