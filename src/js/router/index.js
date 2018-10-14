import $ from 'jquery'

const TEMPLATE_BASE = 'http://localhost:8080/static/templates/';

export const routerLink = route => {
    const CONTENT_ID = 'content';
    redirect(CONTENT_ID, route);
}

export const redirect = (id, templateName) => {
    $(`#${id}`).load(TEMPLATE_BASE + templateName);
}