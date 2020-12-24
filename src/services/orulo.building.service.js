import api from "./api";
import Api from "./api";

const OruloBuildingsService = {
    index: (page) => Api.get('/orulo_buildings', {params: {page: page}}),
    show: (building_id) => api.get(`/orulo_buildings/${building_id}`)
}

export default OruloBuildingsService;