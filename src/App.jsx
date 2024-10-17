import {useState,createContext} from "react";
import Cybrom from "./Cybrom";
const mycontext=createContext();
const App=()=>{
  const [user,setUser]=useState("Ayushi");
  return(
    <>
    <h1>welcome:{user}</h1>
    <button onClick={()=>{setUser("shivam")}}>click</button>
    <mycontext.Provider value={{user,setUser}}>
      <Cybrom value={{user,setUser}}/>
    </mycontext.Provider>
    </>
  )
}
export default App;
export{mycontext};