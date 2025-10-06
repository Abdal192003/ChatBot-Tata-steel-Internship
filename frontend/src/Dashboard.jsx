import React from 'react'
import Navbar from '../Components/Navbar'
import MessageBox from '../Components/MessageBox';


const Dashboard = () => {
  return (
    <div className='bg-[#0E0E0E] h-screen'>
      <Navbar />
      <MessageBox />
    </div>
  )
}

export default Dashboard;