import { buildHeader, buildFooter, routerLink } from './router'
import 'modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/index.css'

const INTRODUCTION_TEMPLATE = 'introduction.html';
const HOME_TEMPLATE = 'historic.html';

routerLink(INTRODUCTION_TEMPLATE);

setTimeout(() => {
    buildFooter();
    buildHeader();
    routerLink(HOME_TEMPLATE);
}, 2000);
