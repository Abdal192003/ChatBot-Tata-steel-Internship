import React from 'react';
import '../App.css'
// import PillNav from '../Components/PillNav'
import Hyperspeed from './Starting';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import ShinyText from '../Components/ShinyText';
// import Navbar from '../Components/Navbar';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
// import { Routes,Router,Route } from 'react-router-dom'
import download from '../assets/download.png'
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png'

const LandingPage = () => {
    const { openSignIn } = useClerk();
    const { isSignedIn, user } = useUser();
    return (
        <div>
            <div className="relative w-screen h-screen bg-black mx-screen ">
                <div className='absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 lg:px-40'>
                    <img className='w-20 h-19 scale-150' src={download} alt="Logo" />
                    {
                        isSignedIn ? (
                            <div className='flex items-center gap-2'>
                                {/* <Link to="/dashboard"><button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-1 px-4 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                                    <ShinyText
                                        text="Dashboard"
                                        disabled={false}
                                        speed={4}
                                        className='text-xl tracking-widest'
                                    />
                                </button></Link> */}
                                <UserButton />
                            </div>
                        ) : (
                            // <Link to="/">
                            <button onClick={() => openSignIn()} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-1 px-4 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                                <ShinyText
                                    text="SignIn"
                                    disabled={false}
                                    speed={4}
                                    className="text-xl tracking-widest"
                                />
                            </button>
                            // </Link>
                        )
                    }

                    {/* <Link to="/dashboard"><button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-1 px-4 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                        <ShinyText
                            text="Dashboard"
                            disabled={false}
                            speed={4}
                            className='text-xl tracking-widest'
                        />
                    </button></Link> */}
                </div>
                <div className='top-1/3 h-screen'>
                    <Hyperspeed
                        effectOptions={{
                            onSpeedUp: () => { },
                            onSlowDown: () => { },
                            distortion: 'turbulentDistortion',
                            length: 400,
                            roadWidth: 10,
                            islandWidth: 2,
                            lanesPerRoad: 4,
                            fov: 90,
                            fovSpeedUp: 150,
                            speedUp: 2,
                            carLightsFade: 0.4,
                            totalSideLightSticks: 20,
                            lightPairsPerRoadWay: 40,
                            shoulderLinesWidthPercentage: 0.05,
                            brokenLinesWidthPercentage: 0.1,
                            brokenLinesLengthPercentage: 0.5,
                            lightStickWidth: [0.12, 0.5],
                            lightStickHeight: [1.3, 1.7],
                            movingAwaySpeed: [60, 80],
                            movingCloserSpeed: [-120, -160],
                            carLightsLength: [400 * 0.03, 400 * 0.2],
                            carLightsRadius: [0.05, 0.14],
                            carWidthPercentage: [0.3, 0.5],
                            carShiftX: [-0.8, 0.8],
                            carFloorSeparation: [0, 5],
                            colors: {
                                roadColor: 0x080808,
                                islandColor: 0x0a0a0a,
                                background: 0x000000,
                                shoulderLines: 0xFFFFFF,
                                brokenLines: 0xFFFFFF,
                                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                                sticks: 0x03B3C3,
                            }
                        }}
                    />
                    <h1 className="flex gap-3 text-5xl font-bold text-white tracking-wider drop-shadow-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p className='bg-gradient-to-r from-[#3F2B96] to-[#A8C0FF] bg-clip-text text-transparent'>TATA STEEL</p><p className='text-white'>CHATBOT</p></h1>
                    <h3 className="flex gap-3 text-xl italic text-white tracking-wider drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to TATA STEEL <p className='underline decoration-wavy decoration-blue-500'>Chatbot</p></h3>
                    {
                        isSignedIn ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/dashboard"><button className="absolute flex gap-2 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                                    <ShinyText
                                        text="Dashboard"
                                        disabled={false}
                                        speed={4}
                                        className='text-xl tracking-widest'
                                    />
                                    <img src={arrow} alt="arrow" className="w-7 h-5 scale-150 my-2 opacity-20 invert brightness-200" />
                                </button>
            
                                </Link>
                                {/* <UserButton /> */}
                            </div>
                        ) : (
                            // <Link to="/">
                            <button onClick={() => openSignIn()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                                <ShinyText
                                    text="GET STARTED"
                                    disabled={false}
                                    speed={4}
                                    className='text-xl tracking-widest'
                                />
                            </button>
                            // </Link>
                        )
                    }

                    {/* <button onClick={() => openSignIn()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                        <ShinyText
                            text="GET STARTED"
                            disabled={false}
                            speed={4}
                            className='text-xl tracking-widest'
                        />
                    </button> */}
                    <div className="relative z-10 flex justify-center pt-4">
                        {/* <PillNav
                        logo={TataSteel}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Contact', href: '/contact' },
                            { label: 'Login', href: '/login' }
                        ]}
                        activeHref="/"
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                    /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
