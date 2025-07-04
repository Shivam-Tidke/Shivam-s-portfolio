import lite from "../assets/lite.jpg"

export function About() {
    return (
        <div>
            <div className="min-h-[calc(100vh-150px)] grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4 bg-black animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out">
                <div className=" min-h-[calc(100vh-150px)] grid p-1 sm:p-6 justify-center items-center col-span-1 lg:col-span-3 mt-5 sm:mt-0 sm:ml-10  md:mt-2 px-4 sm:px-8">

                    <div className=" font-semibold">
                        <label className=" font-bold text-3xl text-lime-500"> About </label>

                        <p className="mt-5 text-justify">Hi there! 👋 I'm Shivam Tidke, a passionate MERN Stack Developer. I build dynamic web applications using MongoDB, Express.js, React.js, and Node.js.</p>
                        <p className="mt-3 text-justify">I have experience in both front-end and back-end development. I enjoy creating interactive user interfaces with React and building scalable APIs with Node.js and Express. I'm always learning new technologies to improve my skills and deliver value through my work.</p>
                        <p className="mt-3 text-justify"> If you're interested in collaborating or just want to chat about tech, feel free to reach out. Let's build something amazing together!</p>
                    </div>
                    <div className="mt-4">
                        <label className=" font-bold text-2xl text-lime-500  ">My Tech Stack</label>
                        <div className="flex flex-wrap  mt-4 gap-1 ">
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" className="float-left p-1" />
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&logo=mysql&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/material--ui-%23008CFF.svg?style=for-the-badge&logo=material-ui&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/bootstrap-%238A42F4.svg?style=for-the-badge&logo=bootstrap&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/sass-%23cf649a.svg?style=for-the-badge&logo=sass&logoColor=whitee" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/photoshop-%23A8A8A8.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/microsoft_excel-%234B8B3B.svg?style=for-the-badge&logo=microsoft-excel&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/c%2B%2B-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" className="float-left p-1" alt="" />
                            <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white" className="float-left p-1" alt="Next.js Badge" />
                            <img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white" className="float-left p-1" alt="Docker Badge" />
                            <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" className="float-left p-1" alt="Prisma Badge" />
                            <img src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white" className="float-left p-1" alt="Git Badge" />
                            <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" className="float-left p-1" alt="PostgreSQL Badge" />
                            <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" className="float-left p-1" alt="MongoDB Atlas Badge" />
                        </div>
                    </div>
                </div>

                <div className=" col-span-1 lg:col-span-2 flex justify-center items-center my-20" >
                    <div className="relative inline-block">
                        <div className="bg-lime-500 absolute inset-0 rounded-full blur-xs "></div>
                        <img src={lite} className="absolute inset-0 rounded-full blur-sm grayscale-50" />
                        <img src={lite} className="rounded-full sm:w-80 w-64 sm:h-80 h-64 p-0.5 relative grayscale-75 hover:grayscale-25" />
                    </div>
                </div>

            </div>

        </div>
    )
}