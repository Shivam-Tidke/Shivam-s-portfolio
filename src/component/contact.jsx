import { IoLogoGithub, IoLogoLinkedin,IoLogoInstagram } from "react-icons/io";


export function Contact(){
    return(
        <section className="px-8 sm:px-6 mt-15 grid  justify-center items-center gap-2 animate-fadein transition-opacity duration-1000 opacity-0 ease-in-out ">
            <div className="text-3xl mb- " ><span className="text-lime-500 ">Get</span> in Touch</div>
            <p className="py-6 ">For any information regarding my work, kindly contact me through the following.</p>
            <p><span className="text-lime-500  " >Phone: </span>+91 7030560392</p>
            <p><span className="text-lime-500 " >Email: </span>work.shivamtidke@gmail.com</p>
            <p><span className="text-lime-500 " >Address: </span>Gondia, Maharashtra, India</p>
            <div className="flex justify-items-normal items-center mt-10  ">
                <a href="https://www.linkedin.com/in/shivam-tidke-9a2569269/" ><IoLogoLinkedin className="text-4xl iconHover"/></a>
                <a href="https://github.com/Shivam-Tidke"><IoLogoGithub className="mx-5 text-4xl iconHover"/></a>
                <a href="https://www.instagram.com/pixels_of_shivam"><IoLogoInstagram className="text-4xl iconHover"/></a>
            </div>
        </section>
    )
}