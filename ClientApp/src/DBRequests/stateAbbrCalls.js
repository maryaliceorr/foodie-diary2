import axios from 'axios';

const getStateAbbrs = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/stateabbr`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};



export default { getStateAbbrs };