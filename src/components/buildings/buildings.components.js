import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import BuildingDataService from "../../services/orulo.building.service";

const Buildings = () => {
    const [buildings, setBuildings] = useState([]);
    const [currentBuilding, setCurrentBuilding] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getBuildings();
    }, [page])

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
      };

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
                        <h4>Building</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentBuilding.name}
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