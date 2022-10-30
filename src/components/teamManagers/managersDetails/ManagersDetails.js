import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {managers} from "../../../services/premier.league.service";
import {ManagersDetailsBuild} from "./ManagersDetailsBuild";

const ManagersDetails = () => {
   const [managerDet,setManagerDet] = useState()
    console.log(managerDet);
    let {id} = useParams()
    useEffect(() =>{
        managers(id).then(value =>setManagerDet(value))

    },[id])
    return (
        <div>
            {managerDet?.response?.map(manager =><ManagersDetailsBuild manager={manager} key={manager.id}/>)}
        </div>
    );
};

export  {ManagersDetails};