const BASE_URL = 'https://api.spacexdata.com/v4/launches/';
const BASE_URL_LAUNCHPADS = 'https://api.spacexdata.com/v4/launchpads/';
const BASE_URL_ROCKETS = 'https://api.spacexdata.com/v4/rockets/';
const BASE_URL_SHIPS = 'https://api.spacexdata.com/v4/ships/';

const base = (url) => {
    return fetch(url)
        .then(data => data.json())
        .then(data => data);
};
export default {
    getLaunchPad: (id) => base(`${BASE_URL_LAUNCHPADS}${id}`),
    getRocketById: (id) => base(`${BASE_URL_ROCKETS}${id}`),
    getNextLaunch: () => base(`${BASE_URL}next`),
    getLaunchById: (id) => base(`${BASE_URL}${id}`),
    getUpcomingLaunches: () => base(`${BASE_URL}upcoming`),
    getPastLaunches: () => base(`${BASE_URL}past`),
    getShipById: (id) => base(`${BASE_URL_SHIPS}${id}`)
};