import React from 'react'
import about from '../assets/aboutus.png'
import { Link } from 'react-router-dom'
import bot from '../assets/bot.jpeg'

const About = () => {
    return (
        <div className='bg-[linear-gradient(90deg,rgba(255,255,255,1)0%,rgba(222,237,255,1)35%,rgba(98,164,240,0.75)100%)] h-screen'>
            <div>
                <div className="flex items-center justify-between mx-12">
                    <img src={about} alt="Tata steel" className='h-20 w-40 p-2 scale-140' />
                    <Link to="/dashboard"><button className="bg-zinc-800 text-white backdrop-blur-md hover:bg-white/20 hover:text-black font-semibold py-3 px-6 border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                        Return
                    </button></Link>
                </div>
            </div>
            <div className='bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 h-[70vh] w-[90%] mx-auto'>
                <p className='mx-12 my-10 italic font-normal'>
                    At <b>TATA STEEL</b>, we believe that great conversations lead to great experiences. That’s why we’ve built our new AI-powered chatbot – a smart, reliable, and always-available assistant designed to make your journey with us smoother and more enjoyable.

                    Our chatbot isn’t just a tool – it’s your 24/7 support companion, ready to answer questions, guide you through our services, and help you find exactly what you need in no time. By combining advanced technology with our commitment to customer care, we ensure every interaction feels simple, helpful, and human.

                    We created this chatbot with one goal in mind: to make connecting with us effortless. Whether you’re here to explore, learn, or solve a problem, our chatbot is here to assist you every step of the way.
                </p>
                <img src={bot} alt="Chatbot" className='h-50 w-40'/>
            </div>
        </div>
    )
}

export default About;