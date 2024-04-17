import React, { useState, useEffect } from 'react';
import images from './bg';
import Avatar from '@mui/material/Avatar';
import Profile from './images/geg.webp';
import ISTE from './images/iste.png'


const Main = () => {
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [randomWord1, setRandomWord1] = useState({ text: '', font: '', color: '' });
    const [randomWord2, setRandomWord2] = useState('');
    const [randomImageIndex, setRandomImageIndex] = useState(0);

    useEffect(() => {
        generateRandomWords();
        generateRandomWords2();
        generateRandomImageIndex();
    }, []);

    const generateRandomWords = () => {
        const words1 = [
            { text: 'a gamified', font: 'ka1', color: '#00FFB2' },
            { text: 'a minimal', font: 'Glacial', color: '#96F2FF' },
            { text: 'an artsy', font: 'Grias', color: '#C5AAFF' },
            { text: 'a cartoony', font: 'KG', color: '#FFE5B4' }
        ];
        const randomIndex1 = Math.floor(Math.random() * words1.length);
        setRandomWord1(words1[randomIndex1]);
    };

    const generateRandomWords2 = () => {
        const words2 = [
            'password manager',
            'meditation and wellness app',
            'hiking trail finder app',
            'colour palette generator website',
            'local party hosting app',
            'music streaming app',
            'resume builder website',
            'ride sharing app',
            'fundraising website',
            'remote learning website',
            'budget planner app',
            'to-do list app',
            'assignment tracker',
            'pomodoro timer app',
            'screen time tracker',
            'money sharing app',
            'website for a tea shop',
            'app for voter information',
            'plant health app',
            'personal fitness tracking app',
            'recipe and meal planner app',
            'language learning app',
            'mental health support app',
            'home maintenance reminder app',
            'online tutoring platform',
            'customizable calendar app',
            'social networking site for book lovers',
            'travel itinerary planner app',
            'job search and career planning website',
            'health and nutrition tracking app',
            'website for a local bakery',
            'app for recycling and sustainability tips',
            'pet care and adoption app',
        ];
        const randomIndex2 = Math.floor(Math.random() * words2.length);
        setRandomWord2(words2[randomIndex2]);
    };

    const generateRandomImageIndex = () => {
        // Assuming you have 'images' imported or defined somewhere
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImageIndex(randomIndex);
    };

    const handleClick1 = () => {
        setClicked1(true);
        generateRandomWords();
        generateRandomImageIndex();
    };

    const handleClick2 = () => {
        setClicked2(true);
        generateRandomWords2();
        generateRandomImageIndex();

    };

    
  const isMobile = window.innerWidth <= 768;

    return (
        <div className='max-md:w-full w-3/5 text-white pb-9 max-md:text-3xl md:text-4xl text-6xl'>
            <div className='flex flex-row justify-start items-center max-md:text-2xl Satoshi'>
                <div className='pr-5'>
                    <Avatar sx={{ width: 56, height: 56 }}>
                        <img src={Profile} alt='Gagan' className='max-md:w-28' />
                    </Avatar>
                </div>
                Gagan Says :
            </div>
            <div className='max-md:w-full w-3/5'>
                <h2 className="text-5xl max-md:text-2xl w-fit text-white Satoshi">
                    Design
                    <span
                        className="hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 mx-4 mb-1"
                        onClick={handleClick1}
                        style={{ cursor: 'pointer', fontFamily: randomWord1.font, color: randomWord1.color }}
                    >
                        <span
                            className={`hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500`}
                        >
                            {randomWord1.text}
                        </span>
                        <svg
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`glow mx-4 mb-2`}
                            style={{ display: 'inline', verticalAlign: 'middle', height: isMobile ? '25px' : '35px', width: isMobile ? '25px' : '35px' }}
                        >
                            <path
                                d="M1.41016 6.1416V14.604H9.87256"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M33.439 28.708V20.2456H24.9766"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M28.8989 13.1934C28.1836 11.172 26.9678 9.36477 25.3651 7.94029C23.7625 6.51581 21.825 5.52053 19.7337 5.04733C17.6423 4.57413 15.4651 4.63843 13.4053 5.23423C11.3455 5.83003 9.47024 6.93791 7.95441 8.4545L1.41016 14.6038M32.439 20.2454L25.8947 26.3948C24.3789 27.9114 22.5036 29.0193 20.4438 29.6151C18.384 30.2109 16.2068 30.2752 14.1154 29.802C12.0241 29.3288 10.0867 28.3335 8.48397 26.909C6.88129 25.4845 5.66557 23.6772 4.95026 21.6558"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span
                        className="hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 mr-4 mb-2"
                        onClick={handleClick2}
                        style={{ cursor: 'pointer' }}
                    >
                        <span
                            className={`hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500`}
                        >
                            {randomWord2}
                        </span>
                        <svg
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`glow mx-4 mb-2`}
                            style={{ display: 'inline', verticalAlign: 'middle', height: isMobile ? '25px' : '35px', width: isMobile ? '25px' : '35px' }}
                        >
                            <path
                                d="M1.41016 6.1416V14.604H9.87256"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M33.439 28.708V20.2456H24.9766"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M28.8989 13.1934C28.1836 11.172 26.9678 9.36477 25.3651 7.94029C23.7625 6.51581 21.825 5.52053 19.7337 5.04733C17.6423 4.57413 15.4651 4.63843 13.4053 5.23423C11.3455 5.83003 9.47024 6.93791 7.95441 8.4545L1.41016 14.6038M32.439 20.2454L25.8947 26.3948C24.3789 27.9114 22.5036 29.0193 20.4438 29.6151C18.384 30.2109 16.2068 30.2752 14.1154 29.802C12.0241 29.3288 10.0867 28.3335 8.48397 26.909C6.88129 25.4845 5.66557 23.6772 4.95026 21.6558"
                                stroke="hsl(209, 100%, 90%)"
                                className="custom-stroke"
                                strokeWidth="2.8208"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default Main;
