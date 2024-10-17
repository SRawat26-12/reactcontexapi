import {useContext} from "react";
import { mycontext } from "./App";
const Bhopal=()=>{
    const {user,setUser}=useContext(mycontext);
    return(
        <>
        <h1>Bhopal:{user}</h1>
        <button onClick={()=>{setUser("rawat")}}>Click here</button>
        </>
    )
}
export default Bhopal;