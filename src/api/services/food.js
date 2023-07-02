import {http} from '../http';
import { ENDPOINTS } from '../constants';

export const getAreaList = () => {
    return http.get(ENDPOINTS.GET_AREAS)
}

export const getAreaFoodItems = (area) =>{
    return http.get('${ENDPOINTS.FILTER_FOOD_BY_AREAS}?a=${area}')
}