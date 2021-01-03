import React, { useState, useEffect } from "react";
import FavoriteDataService from "../../services/favorite.service";

import { HeartFill } from 'react-bootstrap-icons';

const Unfavorites = (props) => {

    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const currentUserH = JSON.parse(localStorage.getItem("userHeader"));
 
    const [submitted, setSubmitted] = useState(false);


    async function handleSubmit() {

        await FavoriteDataService.destroy(props.favorite.favorite_id);

        setSubmitted(true);
    }

    return (
        <div className="submit-form">
            {submitted ? (
            console.log(props.currentBuilding.id)
            ) : (
               
            <form onSubmit={handleSubmit}>
            <button type="submit" className="btn">
                <HeartFill
                    color="royalblue" 
                    size={24}
                />      
            </button>
            </form>
               
            )}
        </div>
        
        
        
          
    );

}

export default Unfavorites;    