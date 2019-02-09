import axios from 'axios';

const getDishTypes = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dishtype`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getDishTypes };