import React from 'react';
import css from './controlerStyle.module.css'
import {lionEmblem} from "../../configs/urls/urls";
import {Join} from "../userControler/join/Join";
import {Link} from "react-router-dom";

const Controler = () => {
    return (
        <div className={css.controlerHold}>
            <div className={css.lionHold}> <Link to={'/'}><img src={lionEmblem} alt="Lion Emblem" className={css.lionLogo}/></Link></div>
            <div className={css.keyBoard}><Join/></div>
        </div>
    );
};

export {Controler};