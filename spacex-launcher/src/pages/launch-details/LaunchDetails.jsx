import React, {useState, useEffect} from 'react';
import LaunchService from '../../services/LaunchService';

const LaunchDetails = (props) => {
    const [launch, setLaunch] = useState(null);
    const id = props.match.params.id;

    useEffect(() => {
        LaunchService.getLaunchById(id)
            .then(data => setLaunch(data));
    }, [    ]);
    return (
        <div className="bg-none container h-200vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            {launch ? <div className="front-container">
                <img className="patch-image" src={launch.links.patch && launch.links.patch.small} alt="Patch"/>
                <h2 className="pb-4 py-2">{launch.name}</h2>
                <iframe className="w-80 mx-auto h-50vh" allowfullscreen="0"
                        src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}>
                </iframe>
                <div className="bg-purple">
                    <p className="text-shadow paragraph-l">{launch.details}</p>
                </div>
            </div> : ''}
        </div>
    );
};

export default LaunchDetails;