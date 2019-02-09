import axios from 'axios';

const getCourses = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/course`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getCourses };