import $ from 'jquery'

const TEMPLATE_BASE = 'http://localhost:8080/static/templates/';

export const teste = () => {
    console.log(2);
}

export const routerLink = route => {
    const CONTENT_ID = 'content';
    redirect(CONTENT_ID, route);
}

export const buildHeader = () => {
    const HEADER_ID = 'header';
    const HEADER_TEMPLATE = 'header.html';
    redirect(HEADER_ID, HEADER_TEMPLATE);
}

export const buildFooter = () => {
    const FOOTER_ID = 'footer';
    const FOOTER_TEMPLATE = 'footer.html';
    redirect(FOOTER_ID, FOOTER_TEMPLATE);
}

export const redirect = (id, route) => {
    $(`#${id}`).load(TEMPLATE_BASE + route);
}