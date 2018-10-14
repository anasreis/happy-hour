import { getLocalData } from '../services'
import renderDetail from '../view/detail'
import { routerLink } from '../router'

const DETAIL_TEMPLATE = 'detail.html';

export const initializeDetail = id => {
    routerLink(DETAIL_TEMPLATE);
    getInvoices(id).then(res => {
        let filteredInvoice = res.invoices.filter(invoice => {
            return invoice.id == id;
        });
        renderDetail(filteredInvoice[0]);
    })
}

const getInvoices = id => {
    return getLocalData();
}