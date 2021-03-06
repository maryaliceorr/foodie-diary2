﻿import axios from 'axios';

const postRestaurant = (restaurant) => {
    return new Promise((resolve, reject) => {
        console.log(restaurant);
        axios
            .post(`/api/restaurant/addrestaurant`, restaurant)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
};

export default { postRestaurant };