import axios from 'axios';

const getMeals = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getMeals };