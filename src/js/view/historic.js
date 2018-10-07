import $ from 'jquery'
import { routerLink } from '../router'

const HISTORIC_TEMPLATE = 'historic.html';
const NO_DATA_TEMPLATE = "no-data.html";

export const renderHistoricRows = historics => {
    if (historics) {
        routerLink(HISTORIC_TEMPLATE);
        setHistoricValue(historics);
    } else {
        routerLink(NO_DATA_TEMPLATE);
    }
}

const setHistoricValue = historics => {
}





