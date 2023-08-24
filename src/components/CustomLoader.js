import React, { useState, useEffect } from 'react';
import './css/CustomLoader.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CustomLoader = () => {

    const texts = [
        'Please wait',
        'We are trying to fetch accurate data ',
        'Good things take time',
        'Almost done!'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex != texts.length - 1) {
            const timer = setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % texts.length);
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, [currentIndex]);


    return (
        <>
            <div className="custom-loader-container">
                <CircularProgress />
            </div>
            <p>{texts[currentIndex]}</p>
        </>

    );
};

export default CustomLoader;