import React from 'react';
import { useOutletContext } from 'react-router';
import Banner from '../../../Components/Banner/Banner';
import Leadership from '../../../Components/Leadership/Leadership';
import Welcome from '../../../Components/Welcome/Welcome';
import History from '../../../Components/History/History';
import Achievements from '../../../Components/Achievements/Achievements';

const Home = () => {
    const { resultsRef } = useOutletContext();

    return (
        <div>
            <Banner />
            <Leadership />
            <Welcome />
            <History />
            <Achievements refProp={resultsRef} />
        </div>
    );
};

export default Home;