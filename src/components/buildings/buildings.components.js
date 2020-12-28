import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import BuildingDataService from "../../services/orulo.building.service";
import FavoriteDataService from "../../services/favorite.service";

import Favorite from "../favorites/favorite.components";
import Unfavorite from "../favorites/unfavorite.components";

const Buildings = (props) => {

    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const currentUserH = JSON.parse(localStorage.getItem("userHeader"));

    const [favorite, setFavorite] = useState('');

    const [buildings, setBuildings] = useState([]);
    const [currentBuilding, setCurrentBuilding] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getBuildings();
    }, [page, props.currentBuilding])

    const handlePageChange = (event, value) => {
        setPage(value);
      };

    async function getBuildings() {
        
        const response = await BuildingDataService.index(page);
        console.log(response.data);
        setBuildings(response.data.buildings);
        setCount(response.data.total_pages);
    };

    const setActiveBuilding = (building, index) => {
        setCurrentBuilding(building);
        setCurrentIndex(index);

        getFavorite(building);

      };

      async function getFavorite(building) {
        setFavorite(undefined);
        const response = await FavoriteDataService.index(building.id, currentUser.data.id);
        if (response.data) {
            response.data.map((item) => {
                setFavorite(item);
                
                
            })
        }
        
        
    }

      if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="list row"> 
            <div className="col-md-12">
                <Pagination
                    className="my-3"
                    count={count}
                    page={page}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageChange}
                />
            </div>
            
            <div className="col-md-6" >
                <ul className = "list-group">
                    {
                        buildings.map((item, index) => (
                            
                                <li 
                                className = {
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveBuilding(item, index)}
                                key={index}
                                >
                                    {item.name}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>  

            <div className="col-md-6" >
                {currentBuilding ? (
                    <div>
                        <div className="row"> 
                            <div className="col-md-10" >
                                <h4>Building</h4> 
                            </div>
                            <div className="col-md-2" >
                                { favorite ? (
                                    <Unfavorite currentBuilding={currentBuilding} /> 
                                ) : (
                                    <Favorite currentBuilding={currentBuilding} /> 
                                )

                                }
                                
                                
                            </div>
                        </div>

                        <div>
                            <img src = {`
                            ${currentBuilding.default_image['200x140']}
                            `} alt = {currentBuilding.default_image.description} 
                            className = "rounded mx-auto d-block img-thumbnail" />
                            
                        </div>

                        <div>
                            <label>
                                <strong>Update at:</strong>
                            </label>{" "}
                            {currentBuilding.updated_at}
                        </div>

                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentBuilding.name}
                        </div>

                        <div>
                            <label>
                                <strong>Address:</strong>
                            </label>{" "}
                            {currentBuilding.address.street_type}{" "}
                            {currentBuilding.address.street}{", "}
                            {currentBuilding.address.number}{", "}
                            {currentBuilding.address.area}{"."}<br />
                            {currentBuilding.address.city}{"/"}
                            {currentBuilding.address.state}{" "}

                        </div>

                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentBuilding.description}
                        </div>
                        
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Building...</p>
                    </div>
                )}
            </div>

       </div>
      );
}

export default Buildings;