import $ from 'jquery'

const URI_LOCAL_DATA = '../static/json/db.json';

export const getLocalData = () => {
    let header = {
        url: URI_LOCAL_DATA,
        type: 'get',
        dataType: 'json'
    };
    return get(header);
}

const get = (header) => {
    return new Promise((resolve, reject) => {
        $.ajax(header).done(resolve).fail(reject);
    });
}