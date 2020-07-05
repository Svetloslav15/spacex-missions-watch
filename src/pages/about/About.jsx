import React from 'react';

const About = () => {
    return (
        <div className="bg-none container h-50vh jumbotron mt-5 position-relative">
            <div className="home-container"/>
            <div className="front-container text-center p-3">
                <h2>About</h2>
                <h4 className="mt-4 text-shadow">This site is not for commercial use, and doesn't have relations to SpaceX. It's
                    purpose is to show upcoming and past missions of SpaceX.
                </h4>
                <h4 className="mt-4 text-shadow">
                    The site is still in development, will be updated frequently..</h4>
                <h4 className="mt-4 text-shadow">I will be thankful if you share it will your friends!</h4>
                <h4 className="mt-4 text-shadow">
                    Find me on <a className="link-c font-weight-bold" href='https://github.com/Svetloslav15'>Github</a> or
                    <a className="link-c font-weight-bold" href='https://novoselski.net/'> My Website</a></h4>
            </div>
        </div>
    );
};

export default About;