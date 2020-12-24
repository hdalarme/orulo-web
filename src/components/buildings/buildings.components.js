import React, { useState, useEffect } from "react";
import BuildingDataService from "../../services/orulo.building.service";
//import { Link } from "react-router-dom";

const Buildings = () => {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        getBuildings();
    }, [])

    async function getBuildings() {
        const response = await BuildingDataService.index();
        console.log(response.data.buildings)
        setBuildings(response.data.buildings);
    };

    return (
       <div> 
        <ul className = "list-group">
             {
                 buildings.map((item, index) => {
                     return (
                         <li key={index} className = "list-group-item">
                             {item.name}
                         </li>
                     )
                 })
             }
        </ul>    
       </div>
      );
}

export default Buildings;