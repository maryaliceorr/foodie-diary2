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
const getMyIndividualMealDishes = (individualMealId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/dishesformeal/${individualMealId}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const getIndividualDish = (individualDishId) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/dish/${individualDishId}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export default { postDish, getMyIndividualMealDishes, getIndividualDish };