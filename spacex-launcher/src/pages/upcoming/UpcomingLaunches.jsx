import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import LaunchService from '../../services/LaunchService';
import LaunchHelper from '../../helpers/LaunchHelper';

const UpcomingLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        LaunchService.getUpcomingLaunches()
            .then(data => setLaunches(data));
    }, []);

    const displayLaunches = () => (
        launches.map((launch, index) => <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{launch.links.patch.small ?
                <img src={launch.links.patch.small} className="patch-img" alt={launch.name}/> : ''}</td>
            <td>{launch.name}</td>
            <td>{LaunchHelper.parseDateInGoodFormat(launch.date_utc)}</td>
            <td>
                <Link to={'/launches/' + launch.id}>
                    <button type="button"
                            className="btn btn-secondary btn-rounded">
                        See more...
                    </button>
                </Link>
            </td>
        </tr>)
    );

    return (
        <div className="bg-none container h-200vh jumbotron mt-5 position-relative">
            <div className="home-container-1"/>
            <div className="front-container">
                <h2 className="pb-4 py-2 text-shadow">Upcoming Launches</h2>
                {
                    launches ?
                        <div class="table-responsive">
                            <table className="table table-hover table-fixed">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Link</th>
                                </tr>
                                </thead>
                                <tbody>
                                {displayLaunches()}
                                </tbody>
                            </table>
                        </div> : <h3 className="text-center my-4">Loading...</h3>
                }
            </div>
        </div>
    );
};

export default UpcomingLaunches;