
// // import { useClerk } from '@clerk/clerk-react';
// // import TataSteel from '/tatasteel.png'
// // import './App.css'
// // import PillNav from './Components/PillNav'
// // import Hyperspeed from './Pages/Starting';
// // import ShinyText from './Components/ShinyText';
// // import { Routes,Router,Route } from 'react-router-dom'


// // function App() {
// //   const { openSignIn } = useClerk();

// //   return (
// //     <>
// //       <div className="relative w-screen h-screen bg-black ">
// //         <Hyperspeed
// //           effectOptions={{
// //             onSpeedUp: () => { },
// //             onSlowDown: () => { },
// //             distortion: 'turbulentDistortion',
// //             length: 400,
// //             roadWidth: 10,
// //             islandWidth: 2,
// //             lanesPerRoad: 4,
// //             fov: 90,
// //             fovSpeedUp: 150,
// //             speedUp: 2,
// //             carLightsFade: 0.4,
// //             totalSideLightSticks: 20,
// //             lightPairsPerRoadWay: 40,
// //             shoulderLinesWidthPercentage: 0.05,
// //             brokenLinesWidthPercentage: 0.1,
// //             brokenLinesLengthPercentage: 0.5,
// //             lightStickWidth: [0.12, 0.5],
// //             lightStickHeight: [1.3, 1.7],
// //             movingAwaySpeed: [60, 80],
// //             movingCloserSpeed: [-120, -160],
// //             carLightsLength: [400 * 0.03, 400 * 0.2],
// //             carLightsRadius: [0.05, 0.14],
// //             carWidthPercentage: [0.3, 0.5],
// //             carShiftX: [-0.8, 0.8],
// //             carFloorSeparation: [0, 5],
// //             colors: {
// //               roadColor: 0x080808,
// //               islandColor: 0x0a0a0a,
// //               background: 0x000000,
// //               shoulderLines: 0xFFFFFF,
// //               brokenLines: 0xFFFFFF,
// //               leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
// //               rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
// //               sticks: 0x03B3C3,
// //             }
// //           }}
// //         />
// //         <h1 className="text-5xl font-bold text-white tracking-wider drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">TATA STEEL CHATBOT</h1>

// //         <button onClick={() => openSignIn()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
// //           <ShinyText
// //             text="GET STARTED"
// //             disabled={false}
// //             speed={4}
// //             className='text-xl tracking-widest'
// //           />
// //         </button>
// //         <div className="relative z-10 flex justify-center pt-4">
// //           <PillNav
// //             logo={TataSteel}
// //             logoAlt="Company Logo"
// //             items={[
// //               { label: 'Home', href: '/' },
// //               { label: 'About', href: '/about' },
// //               { label: 'Contact', href: '/contact' },
// //               { label: 'Login', href: '/login' }
// //             ]}
// //             activeHref="/"
// //             className="custom-nav"
// //             ease="power2.easeOut"
// //             baseColor="#000000"
// //             pillColor="#ffffff"
// //             hoveredPillTextColor="#ffffff"
// //             pillTextColor="#000000"
// //           />
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default App

// import { useClerk } from '@clerk/clerk-react';
// import TataSteel from '/tatasteel.png'
// import './App.css'
// import PillNav from './Components/PillNav'
// import Hyperspeed from './Pages/Starting';
// import ShinyText from './Components/ShinyText';
// import { Routes,Router,Route } from 'react-router-dom'

// function App() {
//   const { openSignIn } = useClerk();

//   return (
//     <>
//       <div className="relative w-screen h-screen bg-black ">
//         <Hyperspeed
//           effectOptions={{
//             onSpeedUp: () => { },
//             onSlowDown: () => { },
//             distortion: 'turbulentDistortion',
//             length: 400,
//             roadWidth: 10,
//             islandWidth: 2,
//             lanesPerRoad: 4,
//             fov: 90,
//             fovSpeedUp: 150,
//             speedUp: 2,
//             carLightsFade: 0.4,
//             totalSideLightSticks: 20,
//             lightPairsPerRoadWay: 40,
//             shoulderLinesWidthPercentage: 0.05,
//             brokenLinesWidthPercentage: 0.1,
//             brokenLinesLengthPercentage: 0.5,
//             lightStickWidth: [0.12, 0.5],
//             lightStickHeight: [1.3, 1.7],
//             movingAwaySpeed: [60, 80],
//             movingCloserSpeed: [-120, -160],
//             carLightsLength: [400 * 0.03, 400 * 0.2],
//             carLightsRadius: [0.05, 0.14],
//             carWidthPercentage: [0.3, 0.5],
//             carShiftX: [-0.8, 0.8],
//             carFloorSeparation: [0, 5],
//             colors: {
//               roadColor: 0x080808,
//               islandColor: 0x0a0a0a,
//               background: 0x000000,
//               shoulderLines: 0xFFFFFF,
//               brokenLines: 0xFFFFFF,
//               leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
//               rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
//               sticks: 0x03B3C3,
//             }
//           }}
//         />
//         <h1 className="text-5xl font-bold text-white tracking-wider drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">TATA STEEL CHATBOT</h1>

//         <button onClick={() => openSignIn()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-white/10 backdrop-blur-md hover:bg-white/20 text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
//           <ShinyText
//             text="GET STARTED"
//             disabled={false}
//             speed={4}
//             className='text-xl tracking-widest'
//           />
//         </button>
//         <div className="relative z-10 flex justify-center pt-4">
//           <PillNav
//             logo={TataSteel}
//             logoAlt="Company Logo"
//             items={[
//               { label: 'Home', href: '/' },
//               { label: 'About', href: '/about' },
//               { label: 'Contact', href: '/contact' },
//               { label: 'Login', href: '/login' }
//             ]}
//             activeHref="/"
//             className="custom-nav"
//             ease="power2.easeOut"
//             baseColor="#000000"
//             pillColor="#ffffff"
//             hoveredPillTextColor="#ffffff"
//             pillTextColor="#000000"
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'
// import Navbar from './Components/Navbar'
import About from './Pages/About'
const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App