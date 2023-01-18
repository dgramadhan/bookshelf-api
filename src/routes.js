const {
    addBooksHandler, getAllBooksHandler, getIdBooksHandler, editBooksById, deleteBooksById
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getIdBooksHandler
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBooksById
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksById
    }
];

module.exports = routes;
