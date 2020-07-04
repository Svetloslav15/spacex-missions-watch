import React, {useState, useEffect} from 'react';
import LaunchService from '../../services/LaunchService';
import LaunchHelper from '../../helpers/LaunchHelper';

const HomePage = () => {
    const [nextLaunch, setNextLaunch] = useState(null);
    const [timeToNextLaunch, setTimeToNextLaunch] = useState({});
    const [launchPad, setLaunchPad] = useState(null);
    const [rocket, setRocket] = useState(null);

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
            if (!rocket) {
                LaunchService.getRocketById(nextLaunch.rocket)
                    .then(data => setRocket(data));
            }
            setInterval(() => {
                setTimeToNextLaunch(LaunchHelper.calculateTimeBetweenTwoDates(nextLaunch.date_utc));
            }, 1000);
        }
    }, [nextLaunch]);
    return (
        <div className="bg-none container h-50vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            {nextLaunch ? <div className="front-container">
                <h2>{nextLaunch.name}</h2>
                <img className="patch-image" src={nextLaunch.links.patch.small} alt="Patch"/>
                <p className="py-1">
                    <span className="pr-4"><i className="fas fa-rocket"/> Rocket: {rocket && rocket.name}</span>
                    <span className="pl-4">Flight # {nextLaunch.flight_number}</span>
                </p>
                <p className="py-1">
                    <i className="fas fa-map-marker-alt mr-2"/>
                    {launchPad && launchPad.full_name}
                </p>
                <h3 className="mx-auto row justify-content-center">
                    <div className="column-display">
                        <span className="font-size-36">{timeToNextLaunch.days}</span>
                        <span className="font-size-22">DAYS</span>
                    </div> :
                    <div className="column-display">
                        <span className="font-size-36">{timeToNextLaunch.hours}</span>
                        <span className="font-size-22">HOURS</span>
                    </div> :
                    <div className="column-display">
                        <span className="font-size-36">{timeToNextLaunch.minutes}</span>
                        <span className="font-size-22">MINUTES</span>
                    </div> :
                    <div className="column-display">
                        <span className="font-size-36">{timeToNextLaunch.seconds}</span>
                        <span className="font-size-22">SECONDS</span>
                    </div>
                </h3>
            </div> : ''}
        </div>
    );
};

export default HomePage;