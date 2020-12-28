import React, { useState, useEffect } from "react";
import FavoriteDataService from "../../services/favorite.service";

import { Heart, HeartFill } from 'react-bootstrap-icons';

const Favorites = (props) => {
    const [favorite, setFavorite] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getFavorite();
     }, [props.currentBuilding]);

    async function handleSubmit() {

        const building_params = {
            name: props.currentBuilding.name, 
            address: props.currentBuilding.address, 
            orulo_building_id: props.currentBuilding.id
        }

        const favorite_params = {
            user_id: '2',
        }

        await FavoriteDataService.create(building_params, favorite_params);

        setSubmitted(true);
        setFavorite([])
    }

    async function getFavorite() {

        const response = await FavoriteDataService.index(props.currentBuilding.id, 2);
        setFavorite(response.data);
        
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
                    //onClick={handleSubmit}
                />  
                {favorite.id,
                console.log(favorite.id)}
                
            </button>
            </form>
            )}
        </div>
        
        
        
          
    );

}

export default Favorites;    