import axios from 'axios';

const getFoodGenres = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/foodgenre`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getFoodGenres };