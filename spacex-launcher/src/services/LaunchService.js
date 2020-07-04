const BASE_URL = 'https://api.spacexdata.com/v4/launches/';
const BASE_URL_LAUNCHPADS = 'https://api.spacexdata.com/v4/launchpads/';
const BASE_URL_ROCKETS = 'https://api.spacexdata.com/v4/rockets/';

export default {
    getLaunchPad: (id) => {
        return fetch(`${BASE_URL_LAUNCHPADS}${id}`)
            .then(data => data.json())
            .then(data => data);
    },
    getRocketById: (id) => {
        return fetch(`${BASE_URL_ROCKETS}${id}`)
            .then(data => data.json())
            .then(data => data);
    },
    getNextLaunch: () => {
        return fetch(`${BASE_URL}next`)
            .then(data => data.json())
            .then(data => data);
    }
}