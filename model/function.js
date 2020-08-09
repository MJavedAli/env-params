module.exports = {
    'isParams': function (params) {
        return params != null && params.constructor.name == 'Params';
    }
}
