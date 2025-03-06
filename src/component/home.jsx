
import { Link } from 'react-router-dom'
import bg from '../assets/bg-home.png'
import { TypeAnimation } from 'react-type-animation'
export function Home() {

    return (
        <div>
            <div className=" grid grid-cols-2 ">
                <div className="col-span-1 mt-25 ml-25">
                    <h3 className='text-5xl'>Hi👋, I am Shivam Tidke</h3>

                    <div className='mt-4'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'MERN Stack Devloper',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Devloper',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className='text-4xl  text-lime-500'
                        repeat={Infinity}
                    />
                    </div>
                    <div>
                        <Link to="/contact">  <button className='btnSuccess mr-8 mt-8 '>Get In Touch</button></Link>
                        <a href="/Shivamtidke_resume.pdf" target='_blank'>
                        <button className='btnError'>Resume</button>
                        </a>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src={bg} alt="" />
                </div>

            </div>
        </div>
    )
}