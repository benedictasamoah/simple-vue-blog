let util = {

};
util.title = function (title) {
    title = title ? title + ' - Welcome' : 'Simple Blog';
    window.document.title = title;
};

export default util;