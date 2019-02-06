import axios from 'axios';

const getRestaurantStatics = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/restaurant/restaurantstatics`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getRestaurantStatics };