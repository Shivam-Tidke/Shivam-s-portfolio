
import { Link } from 'react-router-dom'
import bg from '../assets/bg-home.png'
import { TypeAnimation } from 'react-type-animation'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
export function Home() {

    return (
        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center  items-center  animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out ">
                <div className="col-span-1 mt-10 sm:mt-0 sm:ml-25 ml-4 ">
                    <h3 className='sm:text-4xl text-3xl'>Hi, I'm Shivam Tidke</h3>
                    <div className='mt-4'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'MERN Stack Devloper',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Frontend Devloper',
                                1000,
                                'Web Devloper',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className='sm:text-3xl  text-2xl drop-shadow-lg text-lime-500'
                            repeat={Infinity}
                        />
                    </div>
                    <div>
                        <Link to="/contact">  <button className='btnSuccess mr-8 mt-8 '>Get In Touch</button></Link>
                        <a href="/Shivamtidke_resume.pdf" target='_blank'>
                            <button className='btnError'>Resume</button>
                        </a>
                      
                    </div>
                    <div className="flex justify-items-normal items-center mt-10  ">
                                    <a href="https://www.linkedin.com/in/shivam-tidke-9a2569269/" target='_blank' ><IoLogoLinkedin className="text-4xl iconHover"/></a>
                                    <a href="https://github.com/Shivam-Tidke" target='_blank'><IoLogoGithub className="mx-5 text-4xl iconHover"/></a>
                                   
                                </div>
                </div>
                <div className="col-span-1 sm:mt-0 mt-5  ">
                    <img src={bg} alt="" />
                </div>

            </div>
        </div>
    )
}