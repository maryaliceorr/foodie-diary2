import axios from 'axios';

const getMealTypes = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/mealtype`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getMealTypes };