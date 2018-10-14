import { redirect } from '../router'

export const buildFooter = () => {
    const FOOTER_ID = 'footer';
    const FOOTER_TEMPLATE = 'navbar.html';
    redirect(FOOTER_ID, FOOTER_TEMPLATE);
}