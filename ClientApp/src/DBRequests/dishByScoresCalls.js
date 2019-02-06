import axios from 'axios';

const getAromas = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/aroma`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getAppearances = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/appearance`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getCreativities = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/creativity`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getTastes = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/taste`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getTotalScores = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/totalscore`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};


export default { getAromas, getAppearances, getCreativities, getTastes, getTotalScores };