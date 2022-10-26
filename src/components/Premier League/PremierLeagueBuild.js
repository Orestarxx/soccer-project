import React from 'react';

const PremierLeagueBuild = ({info}) => {
 const {goals,league,score,teams} = info;
    return (
        <div>
           <div>{goals.home}</div>
            <div>{goals.away}</div>
            <img src={teams.away.logo} alt=""/>
            <img src={teams.home.logo} alt=""/>
        </div>
    );
};

export {PremierLeagueBuild};