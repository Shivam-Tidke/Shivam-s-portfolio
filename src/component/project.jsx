import { FaExternalLinkAlt } from "react-icons/fa";
import {  IoLogoGithub } from "react-icons/io5";

export function Project(){
    return(
        <div>
            <div className="animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out">
                <h1 className="text-2xl mx-2    sm:mx-11">Projects</h1>
                <div className="bg-gray-900 sm:m-10 m-5 p-4 raounded">
                    <div className="flex justify-between mb-4">
                    <p className="text-2xl">Tech Video Library</p>
                    <div className="">
                        <a href="https://github.com/Shivam-Tidke/video-library-client" target='_blank'><IoLogoGithub className="inline-block text-2xl mr-3 iconHover"/></a>
                        <a href="https://video-library-client.vercel.app" target='_blank'><FaExternalLinkAlt  className="inline-block text-2xl iconHover" target='_blank'/></a>
                    </div>
                    </div >
                    <p>Developed a full-stack video library platform that allows users to browse, watch, and manage videos with role-based access for admins and users. Implemented core features like video management, user authentication, search, and interactive functionalities (likes, comments).</p>
                    <p className="py-2"><span className="text-lime-500">Tech Stack:</span> MongoDB, Express.js, React.js, Node.js, Tailwind CSS</p>
                    
                </div>

            </div>
        </div>
    )
}