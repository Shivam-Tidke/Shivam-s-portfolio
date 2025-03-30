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

    <div className='text-gray-300 font-bold'>
      <BrowserRouter>
        <header className='flex justify-between  pt-2 px-2 item'>
          <h3 className={`text-2xl sm:ml-10 ml-0 sm:pt-4 pt-1 h-10 ${isOpen ? 'hidden' : 'block'}`}>Portfolio.</h3>


          <div className={`flex font-bold sm:text-base text-3xl flex-col pl-5 items-center sm:flex-row sm:items-center w-100 sm:w-100 pt-4 sm:m-0 mt-16 gap-y-15 sm:p-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <Link to='/' className='line pb-1 sm:w-auto ' onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className='line pb-1 sm:mx-10 sm:w-auto' onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/project" className="line pb-1 sm:w-auto " onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="line pb-1 sm:mx-10 sm:w-auto "onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <button className="sm:hidden inline-grid " onClick={toggleMenu}>
            {
              isOpen ? (
                <RxCross1 className='text-2xl p-0 m-1 ' />
              ) :
                (
                  <RxHamburgerMenu className="text-2xl m-1" />
                )
            }
          </button>

        </header>
        <section className=''>
          <Routes>
            {!isOpen&&<Route path="/" element={<Home />} />}
            {!isOpen&&<Route path="/about" element={<About />} />}
          { !isOpen&& <Route path="/project" element={<Project />} />}
           {!isOpen&& <Route path="/contact" element={<Contact />} />}
          </Routes>
        </section>
      </BrowserRouter>

    </div>
  )
}

export default App
