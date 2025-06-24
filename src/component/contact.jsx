import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMdPhonePortrait } from "react-icons/io";
import {  IoLocationOutline,  IoMailOutline, } from "react-icons/io5";


export function Contact(){
    return(
        <section className="min-h-[calc(100vh-150px)] flex justify-center items-center">
            <div >
                <div className="px-8 sm:px-6 gap-2 animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out  ">
            <div className="text-4xl" ><span className="text-lime-500 ">Get</span> in Touch</div>
            <p className="py-6 ">For any information regarding my work, kindly contact me through the following.</p>
            <p><span className="text-lime-500"><IoMdPhonePortrait className="inline-block"/> Phone: </span>+91 7030560392</p>
            <p><span className="text-lime-500 " ><IoMailOutline className="inline-block"/> Email: </span>work.shivamtidke@gmail.com</p>
            <p><span className="text-lime-500 " ><IoLocationOutline  className="inline-block"/> Address: </span>Pimple Gurav, Pune, Maharashtra, India</p>
            <div className="flex justify-items-normal items-center mt-10  ">
                <a href="https://www.linkedin.com/in/shivam-tidke-9a2569269/" ><IoLogoLinkedin className="text-4xl iconHover"/></a>
                <a href="https://github.com/Shivam-Tidke"><IoLogoGithub className="mx-5 text-4xl iconHover"/></a>
                <a href="https://www.instagram.com/pixels_of_shivam"><IoLogoInstagram className="text-4xl iconHover"/></a>
            </div>
        </div>
            </div>
        </section>
    )
}