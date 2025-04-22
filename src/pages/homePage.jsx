import React, { useEffect } from 'react'
import { animate } from 'motion'
import NetlabLogo from '/Logo.svg'

const HomePage = () => {
  useEffect(() => {
    // Logo animation
    animate(
      '.logo',
      { 
        opacity: [0, 1],
        scale: [0.5, 1],
        y: [20, 0]
      },
      { 
        duration: 0.8,
        easing: [0.17, 0.55, 0.55, 1] // Smooth easing curve
      }
    );

    // Title animations with delay
    animate(
      '.title-network',
      { 
        opacity: [0, 1],
        x: [-20, 0]
      },
      { 
        delay: 0.4, // Delay after logo animation starts
        duration: 0.6,
        easing: [0.17, 0.55, 0.55, 1]
      }
    );

    animate(
      '.title-laboratory',
      { 
        opacity: [0, 1],
        x: [20, 0]
      },
      { 
        delay: 0.7, // Slightly longer delay for second word
        duration: 0.6,
        easing: [0.17, 0.55, 0.55, 1]
      }
    );
  }, []);

  return (
    <div className='flex flex-col justify-center items-center min-h-[450px] bg-gray-300'>
      <div className='logo mb-4'>
        <img 
          src={NetlabLogo} 
          alt="Netlab Logo" 
          className='h-64 w-auto'
        />
      </div>
      <div className='flex flex-row items-center justify-center'>
        <h1 className='title-network text-black font-black text-6xl mr-2'>
          NETWORK
        </h1>
        <h1 className='title-laboratory text-white font-black text-6xl'>
          LABORATORY
        </h1>
      </div>
    </div>
  )
}

export default HomePage