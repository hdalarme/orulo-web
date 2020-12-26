import Api from "./api";

const OruloBuildingsService = {
    index: (page) => Api.get('/orulo_buildings', {params: {page: page}}),
    show: (building_id) => Api.get(`/orulo_buildings/${building_id}`)
}

export default OruloBuildingsService;