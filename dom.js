var get = function (selector) {
    return document.querySelector(selector);
};
 
exports.getAll = function (selector) {
    return document.querySelectorAll(selector);
};
 
exports.get = get;
