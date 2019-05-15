var http = require('http');

var routes = {
    GET: {},
    POST: {}
};

var get = function (path, fn) {
    routes['GET'][path] = fn;
};

var post = function (path, fn) {
    routes['POST'][path] = fn;
};

var createRouter = function (port) {
    http.createServer(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (!routes[req.method][req.url]) {
            res.statusCode = 404;
            return res.end();
        }
        routes[req.method][req.url](req, res);
    }).listen(port);

    return {
        get: get,
        post: post
    };
};

module.exports = createRouter;