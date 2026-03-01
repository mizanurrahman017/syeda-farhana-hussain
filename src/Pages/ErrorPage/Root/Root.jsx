import React, { useRef } from 'react';
import Navbar from '../../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../../Components/Header/Footer/Footer';

const Root = () => {
    const resultsRef = useRef(null);

    const scrollToResults = () => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Navbar scrollToResults={scrollToResults} />
            <Outlet context={{ resultsRef }} />
            <Footer />
        </div>
    );
};

export default Root;