import React from 'react';

const PremierLeagueBuild = ({info}) => {
 const {league} = info;

    return (
        <div>
           <div>{league.name}</div>

            
        </div>
    );
};

export {PremierLeagueBuild};