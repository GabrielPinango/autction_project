export const fetchData = async (url, settings = {}) => fetch(url, settings)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299) {
                return resp.json();
            } else {
                return null;
            }
        })