import Api from "./api";

const FavoriteService = {
    index: (orulo_building_id, user_id) => Api.get('/favorites', {params: {orulo_building_id: orulo_building_id, user_id: user_id}}),
    create: (building, favorite) => Api.post('/favorites',  {building: building, favorite: favorite}),
    destroy: (favorite_id) => Api.delete(`/favorites/${favorite_id}`)

    
    //index: (favorite) => Api.get('/favorites',  {favorite: favorite})
}

export default FavoriteService;