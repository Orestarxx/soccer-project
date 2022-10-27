import React from 'react';
import css from './controlerStyle.module.css'
import {lionEmblem} from "../../configs/urls";

const Controler = () => {
    return (
        <div className={css.controlerHold}>
            <div className={css.lionHold}><img src={lionEmblem} alt="Lion Emblem" className={css.lionLogo}/></div>
            <div className={css.keyBoard}></div>
        </div>
    );
};

export {Controler};