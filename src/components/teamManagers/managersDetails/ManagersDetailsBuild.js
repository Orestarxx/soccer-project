import React from 'react';

const ManagersDetailsBuild = ({manager}) => {
    const {age,birth,name,nationality,photo,team} = manager;
    return (
        <div>
            <div>{age}</div>
            <div>{name}</div>

        </div>
    );
};

export  {ManagersDetailsBuild};