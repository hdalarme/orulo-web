import React, { useState, useEffect } from "react";
import FavoriteDataService from "../../services/favorite.service";

import { Heart, HeartFill } from 'react-bootstrap-icons';

const Favorites = (props) => {

    const currentUser = JSON.parse(sessionStorage.getItem("userData"));
    const currentUserH = JSON.parse(sessionStorage.getItem("userHeader"));

    const [favorite, setFavorite] = useState([]);
    
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit() {

        const building_params = {
            name: props.currentBuilding.name, 
            address: props.currentBuilding.address, 
            orulo_building_id: props.currentBuilding.id
        }

        const favorite_params = {
            user_id: currentUser.data.id
        }

        await FavoriteDataService.create(building_params, favorite_params);

        setSubmitted(true);
        setFavorite([])
    }

    return (
        <div className="submit-form">
            {submitted ? (
            console.log(props.currentBuilding.id)
            ) : (
               
                <form onSubmit={handleSubmit}>
                <button type="submit" className="btn">
                    <Heart
                        color="royalblue" 
                        size={24}
                    />      
                </button>
                </form>
               
            )}
        </div>
        
        
        
          
    );

}

export default Favorites;    