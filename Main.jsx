import { useState } from "react";

function Main(){
    let [username,setUserName]=useState('');
    let[pass,setPass]=useState('');
    
    return(
        <><h1>Login form</h1>
        <div>
            <label>User Name : </label>
            <input type="text" value='userName'></input>
        </div>
        <div>
            <label>Password : </label>
            <input type="password" value='pass'></input>
         </div>

        <button>Submit</button>

    </>
    );
}

export default Main;

