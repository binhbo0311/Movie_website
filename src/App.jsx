import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return(
      <body className="bg-black flex-1/2 ">
        <form  id="search" className=" flex">
          <input className="align-left bg-amber-500 border-1px w-1/2" type="text" id="search" name = "searchbox" placeholder="write your movie name here" ></input>
          </form> 
      <div>
      <div class=" text-amber-100 font-bold  text-4xl text-left flex">
        template
      </div>
        </div>
        <div className="with-50% bg-amber-100 grid">
           </div>
          
      </body>
    )
}

export default App
