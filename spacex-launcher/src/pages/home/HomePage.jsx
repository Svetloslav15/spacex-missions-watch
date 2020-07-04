import React, {useState, useEffect} from 'react';
import LaunchService from '../../services/LaunchService';
import LaunchHelper from '../../helpers/LaunchHelper';

const HomePage = () => {
    const [nextLaunch, setNextLaunch] = useState(null);
    const [timeToNextLaunch, setTimeToNextLaunch] = useState({});
    const [launchPad, setLaunchPad] = useState(null);

    useEffect(() => {
        if (!nextLaunch) {
            LaunchService.getNextLaunch()
                .then((data) => {
                    setNextLaunch(data);
                    let launchDate = new Date(data.date_utc);
                    setTimeToNextLaunch(LaunchHelper.calculateTimeBetweenTwoDates(launchDate));
                });
        }
        else {
            if (!launchPad) {
                LaunchService.getLaunchPad(nextLaunch.launchpad)
                    .then(data => setLaunchPad(data));
            }
            setInterval(() => {
                setTimeToNextLaunch(LaunchHelper.calculateTimeBetweenTwoDates(nextLaunch.date_utc));
            }, 1000);
        }
    }, [nextLaunch]);
    return (
        <div className="bg-none container h-50vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            <div className="front-container">
                <h2>{nextLaunch && nextLaunch.name}</h2>
                <h2>{launchPad && launchPad.full_name}</h2>
                <h3>{timeToNextLaunch.days} days : {timeToNextLaunch.hours} hours : {timeToNextLaunch.minutes} minutes : {timeToNextLaunch.seconds} seconds</h3>
            </div>
        </div>
    );
};

export default HomePage;