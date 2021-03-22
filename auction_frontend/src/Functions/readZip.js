var JSZip = require("jszip");

export const readZip = async (url, fileName) => {
    return Promise.resolve(fetch(url, {
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            if (response.status === 200 || response.status === 0) {
                return Promise.resolve(response.blob());
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }).then(JSZip.loadAsync)
        .then((zip) => {
            return zip.file(fileName).async("base64");
        }).then((content) => {
            return "data:image;base64," + content;
        })
    );
};