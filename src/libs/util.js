let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'Simple Blog';
    window.document.title = title;
};

export default util;