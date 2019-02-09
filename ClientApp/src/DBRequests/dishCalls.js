import axios from 'axios';

const postDish = (dish) => {
    return new Promise((resolve, reject) => {
        console.log(dish);
        axios
            .post(`/api/dish/adddish`, dish)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
};

export default { postDish };