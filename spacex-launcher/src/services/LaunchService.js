const BASE_URL = 'https://api.spacexdata.com/v4/launches/';
const BASE_URL_LAUNCHPADS = 'https://api.spacexdata.com/v4/launchpads/';

export default {
    getLaunchPad: (id) => {
        console.log(id);
        return fetch(`${BASE_URL_LAUNCHPADS}${id}`)
            .then(data => data.json())
            .then(data => data);
    },
    getNextLaunch: () => {
        return fetch(`${BASE_URL}next`)
            .then(data => data.json())
            .then(data => data);
    }
}