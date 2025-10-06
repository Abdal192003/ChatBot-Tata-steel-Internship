// import React from 'react'
// // import InputMessage from '../Components/InputMessage';
// import SpotlightCard from './SpotlightCard';
// import { VscRobot } from "react-icons/vsc";
// import { SiMinds } from "react-icons/si";
// import { FaQuestion } from "react-icons/fa";
// import { RiQuestionAnswerLine } from "react-icons/ri";
// import { IoMdSend } from "react-icons/io";
// import { TiMicrophone } from "react-icons/ti";
// // import { User, Bot, Settings, MessageSquare } from "lucide-react";

// const MessageBox = () => {
//     return (
//         <div>
//             <div className="container -mt-6 w-screen h-screen/20 overflow-x-hidden bg-[#0E0E0E] text-white ">
//                 <div className="middle h-[70vh] flex items-center flex-col justify-center">
//                     <h1 className='text-4xl flex gap-5'><p className='bg-gradient-to-r from-[#3F2B96] to-[#A8C0FF] bg-clip-text text-transparent font-bold'>TATA STEEL</p> CHATBOT</h1>
//                     <div className="boxes mt-3 flex items-center gap-2">
//                         <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                             <p className='text-zinc-400 gap'>Welcome.Ask any question related to Tata Steel</p><i className='absolute right-5 bottom-7 text-2xl'><VscRobot /></i>
//                         </SpotlightCard>
//                         <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                         <p className='text-zinc-400'>Query what's on your mind?</p> <i className='absolute right-5 bottom-7 text-2xl'><SiMinds /></i>
//                         </SpotlightCard>
//                         <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                         <p className='text-zinc-400'>Ease your work by asking questions</p> <i className='absolute right-5 bottom-7 text-2xl'><FaQuestion /></i>
//                         </SpotlightCard>
//                         <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                         <p className='text-zinc-400'>Help's Users to get answers</p> <i className='absolute right-5 bottom-7 text-2xl'><RiQuestionAnswerLine /></i>
//                         </SpotlightCard>
//                     </div>
//                 </div>
//                 <div className="bottom -mt-6">
//                 <div className="inputBox flex items-center rounded-[30px] bg-[#181818]  border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] w-[70%] mx-auto px-5">
//                     <input type="text" placeholder="Ask ChatBot..." className="flex-1 bg-transparent p-5 outline-none px-10 border-white/20" />
//                     <i className='mr-5 text-3xl text-blue-500 cursor-pointer'><TiMicrophone /></i>
//                     <i className='mr-3 text-3xl text-blue-500 cursor-pointer'><IoMdSend /></i>
//                 </div>
//                 <p className="text-zinc-400 mx-auto mt-3 text-center">Developed to assist you with your queries</p>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default MessageBox;


// import React, { useState } from 'react'
// import SpotlightCard from './SpotlightCard';
// import { VscRobot } from "react-icons/vsc";
// import { SiMinds } from "react-icons/si";
// import { FaQuestion } from "react-icons/fa";
// import { RiQuestionAnswerLine } from "react-icons/ri";
// import { IoMdSend } from "react-icons/io";
// import { TiMicrophone } from "react-icons/ti";

// const MessageBox = () => {
//     const [query, setQuery] = useState("");
//     const [answer, setAnswer] = useState("");

//     // Send query to backend
//     const handleSend = async () => {
//         if (!query.trim()) return; // Prevent empty query

//         try {
//             const res = await fetch("http://localhost:8000/ask", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ query })
//             });
//             const data = await res.json();
//             setAnswer(data.answer);
//         } catch (err) {
//             console.error("Error fetching answer:", err);
//             setAnswer("Error: Could not connect to server.");
//         }
//         setQuery(""); // Clear input after sending
//     };

//     return (
//         <div>
//             <div className="container -mt-6 w-screen h-screen/20 overflow-x-hidden bg-[#0E0E0E] text-white">
//                 {
//                     answer ? (
//                         <div className="w-[700px] h-[200px] rounded-xl bg-[#181818] border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] mx-auto flex justify-center mt-20"><p className="text-zinc-200 mx-auto mt-4 text-center items-center">{answer}</p></div>
//                     ) : (
//                         <div className="middle h-[70vh] flex items-center flex-col justify-center">
//                             <h1 className='text-4xl flex gap-5'>
//                                 <p className='bg-gradient-to-r from-[#3F2B96] to-[#A8C0FF] bg-clip-text text-transparent font-bold'>TATA STEEL</p> CHATBOT
//                             </h1>

//                             {/* Cards */}
//                             <div className="boxes mt-5 flex items-center gap-2">
//                                 <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                                     <p className='text-zinc-400 gap'>Welcome. Ask any question related to Tata Steel</p>
//                                     <i className='absolute right-5 bottom-7 text-2xl'><VscRobot /></i>
//                                 </SpotlightCard>
//                                 <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                                     <p className='text-zinc-400'>Query what's on your mind?</p>
//                                     <i className='absolute right-5 bottom-7 text-2xl'><SiMinds /></i>
//                                 </SpotlightCard>
//                                 <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                                     <p className='text-zinc-400'>Ease your work by asking questions</p>
//                                     <i className='absolute right-5 bottom-7 text-2xl'><FaQuestion /></i>
//                                 </SpotlightCard>
//                                 <SpotlightCard className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]" spotlightColor="rgba(0, 229, 255, 0.2)">
//                                     <p className='text-zinc-400'>Help's Users to get answers</p>
//                                     <i className='absolute right-5 bottom-7 text-2xl'><RiQuestionAnswerLine /></i>
//                                 </SpotlightCard>
//                             </div>
//                         </div >
//                     )
//                 }

//                 {/* Input */}
//                 <div className="-mt-6 bottom fixed bottom-5 left-0 right-0">
//                     <div className="inputBox flex items-center rounded-[30px] bg-[#181818] border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] w-[70%] mx-auto px-5">
//                         <input
//                             type="text"
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             placeholder="Ask ChatBot..."
//                             className="flex-1 bg-transparent p-5 outline-none px-10 border-white/20"
//                         />
//                         <i className='mr-5 text-3xl text-blue-500 cursor-pointer'><TiMicrophone /></i>
//                         <i
//                             className='mr-3 text-3xl text-blue-500 cursor-pointer'
//                             onClick={handleSend}
//                         >
//                             <IoMdSend />
//                         </i>
//                     </div>

//                     {/* Answer
//                     {answer && (
//                         <p className="text-zinc-200 mx-auto mt-4 text-center">{answer}</p>
//                     )} */}

//                     <p className="text-zinc-400 mx-auto mt-3 text-center">
//                         Developed to assist you with your queries
//                     </p>
//                 </div>
//             </div >
//         </div >
//     )
// }

// export default MessageBox;


// MessageBox.jsx
"use client";
import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import { VscRobot } from "react-icons/vsc";
import { SiMinds } from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { TiMicrophone } from "react-icons/ti";

// ✅ import your VAPI SDK here (make sure installed properly)
import { vapi } from "../AgentLib/vapi_sdk.jsx";  

const MessageBox = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [isMicActive, setIsMicActive] = useState(false);
  const VAPI_API_KEY = import.meta.env.VITE_VAPI_API_KEY;
  const VAPI_WORKFLOW_ID = import.meta.env.VITE_VAPI_WORKFLOW_ID;


  // Send query to backend
  const handleSend = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${VAPI_API_KEY}`
        },
        body: JSON.stringify({ query }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error("Error fetching answer:", err);
      setAnswer(`Error: ${err.message || "Could not connect to server."}`);
    }
    setQuery("");
  };

  // 🎤 Mic Handler with VAPI
  const handleMicClick = async () => {
    try {
        if (!isMicActive) {
            if (!VAPI_WORKFLOW_ID || !VAPI_API_KEY) {
                throw new Error("Missing VAPI credentials in .env");
            }

            console.log("Starting VAPI call with workflow ID:", VAPI_WORKFLOW_ID);
            console.log("Using API key:", VAPI_API_KEY ? '***' + VAPI_API_KEY.slice(-4) : 'Not set');
            
            // Try starting the call with just the workflow ID first
            try {
                const call = await vapi.start(VAPI_WORKFLOW_ID);
                console.log("VAPI call started with workflow ID:", call);
            } catch (error) {
                console.error("Error starting call with workflow ID, trying with assistant ID format:", error);
                // If that fails, try with the assistant ID format
                try {
                    const call = await vapi.start({
                        assistantId: VAPI_WORKFLOW_ID,
                        assistant: {
                            variables: {
                                username: "Guest",
                                userid: "123"
                            }
                        }
                    });
                    console.log("VAPI call started with assistant ID:", call);
                } catch (innerError) {
                    console.error("Failed to start VAPI call:", innerError);
                    throw innerError;
                }
            }

            console.log("VAPI call started successfully");
            setIsMicActive(true);
        } else {
            console.log("Stopping VAPI call");
            await vapi.stop();
            setIsMicActive(false);
            console.log("VAPI call stopped successfully");
        }
    } catch (err) {
        console.error("❌ VAPI Error:", {
            message: err.message,
            name: err.name,
            stack: err.stack,
            response: err.response?.data
        });
        setAnswer(`Error with voice assistant: ${err.message || 'Unknown error'}`);
    }
};

  return (
    <div>
      <div className="container -mt-6 w-screen h-screen/20 overflow-x-hidden bg-[#0E0E0E] text-white">
        {answer ? (
          <div className="w-[700px] h-[200px] rounded-xl bg-[#181818] border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] mx-auto flex justify-center mt-20">
            <p className="text-zinc-200 mx-auto mt-4 text-center items-center">
              {answer}
            </p>
          </div>
        ) : (
          <div className="middle h-[70vh] flex items-center flex-col justify-center">
            <h1 className="text-4xl flex gap-5">
              <p className="bg-gradient-to-r from-[#3F2B96] to-[#A8C0FF] bg-clip-text text-transparent font-bold">
                TATA STEEL
              </p>{" "}
              CHATBOT
            </h1>

            {/* Cards */}
            <div className="boxes mt-5 flex items-center gap-2">
              <SpotlightCard
                className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-zinc-400 gap">
                  Welcome. Ask any question related to Tata Steel
                </p>
                <i className="absolute right-5 bottom-7 text-2xl">
                  <VscRobot />
                </i>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-zinc-400">Query what's on your mind?</p>
                <i className="absolute right-5 bottom-7 text-2xl">
                  <SiMinds />
                </i>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-zinc-400">Ease your work by asking questions</p>
                <i className="absolute right-5 bottom-7 text-2xl">
                  <FaQuestion />
                </i>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-[200px] h-[170px] bg-[#81818C]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-zinc-400">Help's Users to get answers</p>
                <i className="absolute right-5 bottom-7 text-2xl">
                  <RiQuestionAnswerLine />
                </i>
              </SpotlightCard>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="-mt-6 bottom fixed bottom-5 left-0 right-0">
          <div className="inputBox flex items-center rounded-[30px] bg-[#181818] border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] w-[70%] mx-auto px-5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask ChatBot..."
              className="flex-1 bg-transparent p-5 outline-none px-10 border-white/20"
            />
            <i
              className={`mr-5 text-3xl cursor-pointer ${
                isMicActive ? "text-red-500" : "text-blue-500"
              }`}
              onClick={handleMicClick}
            >
              <TiMicrophone />
            </i>
            <i
              className="mr-3 text-3xl text-blue-500 cursor-pointer"
              onClick={handleSend}
            >
              <IoMdSend />
            </i>
          </div>

          <p className="text-zinc-400 mx-auto mt-3 text-center">
            Developed to assist you with your queries
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
