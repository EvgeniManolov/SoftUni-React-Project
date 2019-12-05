import $ from 'jquery';
const host = 'http://localhost:58525/api';

let token = () => {
    return sessionStorage.getItem('p_token');
};

export default {

    post: (endPoint, auth, data) => {
        let url = host + endPoint;

        return $.ajax(
            {
                url: url,
                type: 'POST',
                headers: createHeader(auth),
                data: JSON.stringify(data)
            });
    },

    update: (endPoint, auth, data) => {
        let url = host + endPoint;

        return $.ajax(
            {
                url: url,
                type: 'PUT',
                headers: createHeader(auth),
                data: JSON.stringify(data)
            });
    },

    get: (endPoint, auth, query) => {
        let url = query !== undefined ? host + endPoint + query : host + endPoint;

        $.ajax(
            {
                url: url,
                type: 'GET'

            }).done(function(response, textStatus, xhr){

            let settingsHeader = xhr.getResponseHeader("ApiSettings");

            sessionStorage.setItem('apiSettings', settingsHeader);
        });

        return $.ajax(
            {
                url: url,
                type: 'GET',
                headers: createHeader(auth),

            })
    },

    remove: (endPoint, auth) => {
        let url = host + endPoint;

        return $.ajax(
            {
                url: url,
                type: 'DELETE',
                headers: createHeader(auth)
            });
    }
};

let createHeader = (auth) => {
    if (auth === null) {
        return {'Content-Type': 'application/json; charset=UTF-8'}
    }

    return {
        'Authorization': 'bearer ' + token(),
        'Content-Type': 'application/json; charset=UTF-8'
    }
};