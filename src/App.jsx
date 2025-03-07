import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import './App.css'
import { Home } from "./component/home"
import { About } from "./component/about"
import { Project } from "./component/project"
import { Contact } from "./component/contact"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <div className='text-white font-bold'>
      <BrowserRouter>
        <header className='flex justify-between  pt-2 px-2 item'>
          <h3 className='text-2xl sm:ml-10 sm:pt-4 pt-0  '>Portfolio.</h3>


          <div className={`flex flex-col sm:flex-row sm:items-center w-25 sm:w-100 pt-9 sm:p-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <Link to='/' className='line pb-1 sm:w-auto' onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className='line pb-1 sm:mx-10 sm:w-auto' onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/project" className="line pb-1 sm:w-auto " onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="line pb-1 sm:mx-10 sm:w-auto"onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <button className="sm:hidden inline-flex" onClick={toggleMenu}>
            {
              isOpen ? (
                <RxCross1 className='text-2xl  m-1' />
              ) :
                (
                  <RxHamburgerMenu className="text-2xl m-1 " />
                )
            }
          </button>

        </header>
        <section className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </BrowserRouter>

    </div>
  )
}

export default App
