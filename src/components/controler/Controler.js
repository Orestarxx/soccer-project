import React from 'react';
import css from './controlerStyle.module.css'
import {lionEmblem} from "../../configs/urls";
import {Join} from "../userControler/join/Join";

const Controler = () => {
    return (
        <div className={css.controlerHold}>
            <div className={css.lionHold}><img src={lionEmblem} alt="Lion Emblem" className={css.lionLogo}/></div>
            <div className={css.keyBoard}><Join/></div>
        </div>
    );
};

export {Controler};