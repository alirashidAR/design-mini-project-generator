import React, { useState, useEffect } from 'react';
import images from './bg';
import Avatar from '@mui/material/Avatar';
import Profile from './images/geg.webp';
import ISTE from './images/iste.png';

const Geg = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [randomWord1, setRandomWord1] = useState({ text: '', font: '', color: '' });
  const [randomWord2, setRandomWord2] = useState('');
  const [randomGradients, setRandomGradients] = useState([]);
  const [randomImageIndex, setRandomImageIndex] = useState(0);

  useEffect(() => {
    generateRandomWords();
    generateRandomWords2();
    generateRandomGradients();
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

  const generateRandomGradients = () => {
    const gradients = [
      'radial-gradient(circle at 20% 30%, rgba(75,0,130,0.8), transparent)',
      'radial-gradient(circle at 80% 70%, rgba(0,128,128,0.8), transparent)',
      'radial-gradient(circle at 50% 50%, rgba(255,20,147,0.8), transparent)',
      'radial-gradient(circle at 30% 80%, rgba(255, 204, 204, 0.8), transparent)',
      'radial-gradient(circle at 70% 20%, rgba(0,191,255,0.8), transparent)',
      'radial-gradient(circle at 40% 60%, rgba(135,206,250,0.8), transparent)',
      'radial-gradient(circle at 60% 40%, rgba(65,105,225,0.8), transparent)',
      'radial-gradient(circle at 10% 10%, rgba(30,144,255,0.8), transparent)',
      'radial-gradient(circle at 90% 90%, rgba(255,69,0,0.8), transparent)',
      'radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.8), transparent)',
    ];

    const randomGradients = [];
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * gradients.length);
      randomGradients.push(gradients[randomIndex]);
    }

    setRandomGradients(randomGradients);
  };

  const generateRandomImageIndex = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImageIndex(randomIndex);
  };

  const handleClick1 = () => {
    setClicked1(true);
    generateRandomWords();
    generateRandomGradients();
  };

  const handleClick2 = () => {
    setClicked2(true);
    generateRandomWords2();
    generateRandomGradients();
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className="flex flex-col background-image justify-center items-center m-0 p-0 "
      style={{
        background: `
          ${randomGradients[0]},
          ${randomGradients[1]},
          ${randomGradients[2]},
          ${randomGradients[3]},
          ${randomGradients[4]},
          ${randomGradients[5]},
          ${randomGradients[6]},
          ${randomGradients[7]},
          ${randomGradients[8]},
          ${randomGradients[9]}
        `,
      }}
    >
      <div className="box bg w-screen min-h-screen flex flex-col justify-center items-start max-md:border-8 p-12">
        <div className='hello-world flex flex-col justify-start items-center w-1/12 max-md:w-4/12' >
          <span className='Glory pt-3 max-md:text-xl'>DESIGN</span>
          <span className='pb-3 z-10 Ostrich max-md:text-3xl max-md:-mt-3 md:-mt-6'>CORE '24</span>
        </div>
        <div className='hello-world-right flex flex-row justify-start items-center w-44 max-md:w-4/12 text-black rounded-l-full Satoshi max-md:text-sm text-3xl' >
          <div className='p-1 pr-5'>
            <Avatar className='avatar' sx={{ width: isMobile ? 30 : 56, height: isMobile ? 30 : 56 }}>
              <img src={ISTE} alt='Gagan' className='max-md:w-28' />
            </Avatar>
          </div>
          ISTE
        </div>
        <div className='max-md:w-full w-full text-white pb-9 max-md:text-2xl md:text-4xl text-9xl'>
          {clicked1 || clicked2 ? (
            <div className='flex flex-row justify-start items-center max-md:text-2xl Satoshi mb-10'>
              <div className='pr-5'>
                <Avatar sx={{ width: 56, height: 56 }}>
                  <img src={Profile} alt='Gagan' className='max-md:w-28' />
                </Avatar>
              </div>
              Gagan Says :
            </div>
          ) : null}
          {clicked1 || clicked2 ? (
            <>
              <h2 className="text-8xl max-md:text-2xl w-fit text-white Satoshi">
                Design
                <span
                  className=" hover:border-b-2 hover:border-b-blue-500 mx-4 mb-1"
                  onClick={handleClick1}
                  style={{ cursor: 'pointer', fontFamily: randomWord1.font, color: randomWord1.color }}
                >
                  <span
                    className={` hover:border-b-2 hover:border-b-blue-500`}
                  >
                    {randomWord1.text}
                  </span>
                  <svg
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`glow mx-4 mb-2`}
                    style={{ display: 'inline', verticalAlign: 'middle', height: isMobile ? '20px' : '35px', width: isMobile ? '20px' : '35px' }}
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
                  className=" hover:border-b-2 hover:border-b-blue-500 mr-4 mb-2"
                  onClick={handleClick2}
                  style={{ cursor: 'pointer' }}
                >
                  <span
                    className={` hover:border-b-2 hover:border-b-blue-500`}
                  >
                    {randomWord2}
                  </span>
                  <svg
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`glow mx-4 mb-2`}
                    style={{ display: 'inline', verticalAlign: 'middle', height: isMobile ? '20px' : '35px', width: isMobile ? '20px' : '35px' }}
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
            </>
          ) : (
            <div className='Satoshi'>
              <h1 className="text-6xl max-md:text-3xl text-white pb-9 Satoshi">
                Hello! Welcome to your mini-projector generator
              </h1>
              <button onClick={handleClick1} className="button-86 Satoshi">
                Generate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Geg;