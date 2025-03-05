import about from "../assets/about.jpg"
export function About() {
    return (
        <div>
            <div className=" grid grid-cols-5">
                <div className="col-span-3 mt-15 ml-15">
                    
                    <label className=" font-bold text-3xl text-lime-500 "> About</label>
                    <p className="mt-5 text-justify">Hi there! 👋 I'm Shivam Tidke, a passionate MERN Stack Developer. I build dynamic web applications using MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p className="mt-3 text-justify">I have experience in both front-end and back-end development. I enjoy creating interactive user interfaces with React and building scalable APIs with Node.js and Express. I'm always learning new technologies to improve my skills and deliver value through my work.</p>
                    <p className="mt-3 text-justify"> If you're interested in collaborating or just want to chat about tech, feel free to reach out. Let's build something amazing together!</p>
                  
                    <div className="mt-4">
                    <label className=" font-bold text-2xl text-lime-500 ">My Tech Stack</label>
                    <div className="mt-4 shadow-2xl">
                   <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" className="float-left p-1" />
                    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"  className="float-left p-1" alt="" />
                   
                   
                    </div>

                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex justify-center items-center mt-15 " >
                        <div className="relative inline-block">
                        <div className="bg-lime-500 absolute inset-0 rounded-full blur-xs "></div>
                        <img src={about} className="absolute inset-0 rounded-full blur-2xl" />
                        <img src={about} className="rounded-full w-80 h-80 p-0.5 relative" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}