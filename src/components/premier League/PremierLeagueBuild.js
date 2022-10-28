import React from 'react';

const PremierLeagueBuild = ({info}) => {
 const {goals,league,score,teams} = info;
    return (
        <div>
           <div ><a href="https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={teams.away.logo} alt=""/></a></div>

            
        </div>
    );
};

export {PremierLeagueBuild};