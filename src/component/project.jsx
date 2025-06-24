import { FaExternalLinkAlt } from "react-icons/fa";
import {  IoLogoGithub } from "react-icons/io5";

export function Project(){
    return(
        <div className="">
            <div className=" animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out">
                <h1 className="text-3xl mx-2 my-4  text-lime-500 font-bold  sm:mx-11">Projects</h1>
                <div className="overflow-auto max-h-[calc(100vh-150px)]">
                <div className="bg-gray-900 sm:m-10 m-5 p-4 raounded">
                    <div className="flex justify-between mb-4">
                    <p className="text-2xl">Tech Video Library</p>
                    <div className="">
                        <a href="https://github.com/Shivam-Tidke/video-library-client" target='_blank'><IoLogoGithub className="inline-block text-2xl mr-3 iconHover"/></a>
                        <a href="https://video-library-client.vercel.app" target='_blank'><FaExternalLinkAlt  className="inline-block text-2xl      iconHover" target='_blank'/></a>
                    </div>
                    </div >
                    <p>Developed a full-stack video library platform that allows users to browse, watch, and manage videos with role-based access for admins and users. Implemented core features like video management, user authentication, search, and interactive functionalities (likes, comments).</p>
                    <p className="py-2"><span className="text-lime-500">Tech Stack:</span> MongoDB, Express.js, React with TypeScript, Node.js, Tailwind CSS, JWT Authentication</p>
                </div>
                <div className="bg-gray-900 sm:m-10 m-5 p-4 raounded">
                    <div className="flex justify-between mb-4">
                    <p className="text-2xl">MovieDB Web App</p>
                    <div className="">
                        <a href="https://github.com/Shivam-Tidke/MovieDb" target='_blank'><IoLogoGithub className="inline-block text-2xl mr-3 iconHover"/></a>
                        <a href="https://681718479822ebee530b68c0--moviesoftmbd.netlify.app/" target='_blank'><FaExternalLinkAlt  className="inline-block text-2xl      iconHover" target='_blank'/></a>
                    </div>
                    </div >
                    <p>MovieDb is a dynamic web application that allows users to explore popular, top-rated, and upcoming movies. The application also features a powerful search functionality that enables users to search for movies by title.</p>
                    <p className="py-2"><span className="text-lime-500">Tech Stack: </span>React, JavaScript, Tailwind CSS, The Movie Database API</p>
                </div>
                
                <div className="bg-gray-900 sm:m-10 m-5 p-4 raounded">
                    <div className="flex justify-between mb-4">
                    <p className="text-2xl">IoT Based Remote Patient Health Monitoring System
                    </p>
                    <div className="">
                    
                        <a href="/5r.pdf" target='_blank'><FaExternalLinkAlt  className="inline-block m-2 text-2xl iconHover" target='_blank'/></a>
                    </div>
                    </div >
                    <p>This project aimed to continuously monitor vital health parameters such as heart rate and body temperature, facilitating real-time data access for healthcare providers and family members. My role focused on PCB design and establishing a connection between the ESP32 microcontroller and ThingSpeak, an IoT analytics platform.</p>
                    <p className="py-2"><span className="text-lime-500">Tech Stack:</span> NodeMCU (ESP8266/Wemos D1 Mini), MAX30100 Pulse Oximeter, NTC Thermistor, SIM800L GSM Module, Arduino IDE, ThingSpeak Cloud Platform.</p>
                </div>
                </div>
        

            </div>
        </div>
    )
}