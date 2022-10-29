import React from 'react';
import css from './joinStyle.module.css'
import {Link} from "react-router-dom";

const Join = () => {
    return (
        <div>
            <div className={css.dropdown}>
                <button className={css.dropbtn}>Join</button>
                <div className={css.dropdownContent}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <Link to={'/managers'}>Managers</Link>
                </div>
            </div>
        </div>
    );
};

export  {Join};