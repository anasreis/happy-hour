import { redirect } from '../router'

export const buildHeader = () => {
    const HEADER_ID = 'header';
    const HEADER_TEMPLATE = 'header.html';
    redirect(HEADER_ID, HEADER_TEMPLATE);
}