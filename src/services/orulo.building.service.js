import api from "./api";
import Api from "./api";

const OruloBuildingsService = {
    index: () => Api.get('/orulo_buildings'),
    show: (building_id) => api.get(`/orulo_buildings/${building_id}`)
}

export default OruloBuildingsService;