import React, {useState, useEffect} from 'react';
import LaunchService from '../../services/LaunchService';
import Rocket from './Rocket';
import Ship from './Ship';

const LaunchDetails = (props) => {
    const [launch, setLaunch] = useState(null);
    const [rocket, setRocket] = useState(null);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        LaunchService.getLaunchById(props.match.params.id)
            .then(data => {
                setLaunch(data);
                data.ships.forEach(x => LaunchService.getShipById(x)
                    .then(ship => {
                        let currShips = ships;
                        currShips.push(ship);
                        setShips(currShips);
                    })
                );
                LaunchService.getRocketById(data.rocket)
                    .then(rocketData => setRocket(rocketData));
            });
    }, []);

    const displayShips = () => ships.map(ship => <Ship ship={ship}/>);

    return (
        <div className="bg-none container h-200vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            {launch ? <div className="front-container">
                {launch.links.patch.small && <img className="patch-image" src={launch.links.patch.small} alt="Patch"/>}
                <h2 className="pb-4 py-2">{launch.name}</h2>
                {
                    launch.links.youtube_id ?
                        <iframe className="w-80 mx-auto h-50vh" allowFullScreen="0"
                                src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}>
                        </iframe> :
                        <h4 className='text-center text-shadow my-4'>Video will come soon...</h4>
                }

                <div className="bg-purple">
                    {
                        launch.details ?
                            <p className="text-shadow paragraph-l">{launch.details}</p>
                            :
                            <h4 className='text-center text-shadow my-4'>More information will come soon...</h4>
                    }
                    {
                        rocket ?
                            <div className="paragraph-l">
                                <Rocket rocket={rocket}/>
                                {
                                    ships && (
                                       <div>
                                           <h3 className='mb-4'>Ships</h3>
                                           {displayShips()}
                                       </div>
                                    )
                                }
                            </div>
                            :
                            <h4>No infomation about the rocket</h4>
                    }
                </div>

            </div> : ''}

        </div>
    );
};

export default LaunchDetails;