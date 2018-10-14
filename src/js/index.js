import 'modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/index.css'

import { buildFooter } from './view/footer'
import { buildHeader } from './view/header'
import { initializeDetail } from './controllers/detail'

// Initialize App
buildFooter();
buildHeader();
initializeDetail(1);