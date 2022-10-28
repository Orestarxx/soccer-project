import React from 'react';
import css from './joinStyle.module.css'

const Join = () => {
    return (
        <div>
            <div className={css.dropdown}>
                <button className={css.dropbtn}>Join</button>
                <div className={css.dropdownContent}>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    <a href="#">Settings</a>
                </div>
            </div>
        </div>
    );
};

export  {Join};