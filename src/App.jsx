import React, { useEffect } from 'react'
import Portfolio from "./Components/Portfolio"
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import toast from 'react-hot-toast'
import Projects from './Components/Projects'
import Work from './Components/Work';
import Last from "./Components/Last"
function App() {
  useEffect(()=>{ 
    function welcomehandler(){
      toast('Welcome',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
    }
    window.addEventListener('load',welcomehandler)
    return ()=>window.removeEventListener('load',welcomehandler)

  },[])
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto relative">
    <Portfolio/>
    <Skills/>
    <Work/>
    <Projects/>
    <Contact/>
    <Last/>
    </div>
  )
}

export default App