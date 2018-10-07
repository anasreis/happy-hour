import 'modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/index.css'

import { buildHeader, buildFooter, routerLink } from './router'
import { getLocalData } from './services'
import { renderHistoricRows } from './view/historic'

const INTRODUCTION_TEMPLATE = 'introduction.html';

routerLink(INTRODUCTION_TEMPLATE);

getLocalData().then(
    res => {
        let historics = res.historics;
        initializeApp(historics);
    }
);

const initializeApp = (historics = null) => {
    buildFooter();
    buildHeader();
    renderHistoricRows(historics);
}
