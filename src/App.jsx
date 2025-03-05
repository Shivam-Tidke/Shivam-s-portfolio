import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import './App.css'
import { Home } from "./component/home"
import { About } from "./component/about"
import { Project } from "./component/project"
import { Contact } from "./component/contact"

function App() {

  return (
  
    <div className='bady-background text-white font-bold'>
      <BrowserRouter>
      <header className='flex justify-between p-4'>
        <h3 className='text-2xl ml-16'>Portfolio.</h3>
        <div >
          <Link to='/' className='hover:text-lime-500 '>Home</Link>
          <Link to="/about" className='mx-10'>About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact" className='mx-10'>Contact</Link>
        </div>
      </header>
      <section className='mt-'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        

      </section>
      </BrowserRouter>

    </div>  
  )
}

export default App
