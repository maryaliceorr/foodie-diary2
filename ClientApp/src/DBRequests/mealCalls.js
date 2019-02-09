import axios from 'axios';

const getMyMeals = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/mymeals`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const postMeal = (meal) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/api/meal/addmeal`, meal)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
};




export default { getMyMeals, postMeal };