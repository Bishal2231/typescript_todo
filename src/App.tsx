import { useState } from 'react'

import './App.css'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function App() {
  const [input, setInput] = useState("")

  return (
    <>
      <div className="flex   justify-center bg-black h-[100vh] text-white"> 
      <div className="flex flex-col  w-140  p-8  border m-10">
        
        <div className="flex justify-center m-4"> 
        <div className="text-lg font-bold "> Todos for the day </div>
        </div>
        <div className="flex flex-row items-center gap-8 justify-between">  
            <input className="border border-2 px-10 py-2 rounded"
              onChange={((e)=>{setInput(e.target.value)})}
               type="input"  placeholder="Add todo search"           
            />  
          <button className="bg-white text-black px-4 py-2 rounded whitespace-nowrap">Add todo</button>
           

        </div>

        <div className="flex justify-center m-5 text-lg font-bold "> 
          Todos
        </div>
        <div>

          <div className="border border-2 px-10 py-3 rounded flex flex-row align-center justify-between">
            <div>             create a typescript project today
            </div>
            <div className="flex flex-row gap-8 flex align-center text-xl">
            <MdDelete /> <CiEdit />
            </div>
             
           </div>
        </div>
         </div>
         </div>

    </>
  )
}

export default App
