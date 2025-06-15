
import { useState } from 'react';

function Header() {
    const [ fruit ,setFruit ]= useState("Apple");
    const HandleFruit=()=>{
        setFruit("Mango");
    }
    return (
        <div>
          
          <h1>Welcome to React</h1>
          <h2>Current Fruit: {fruit}</h2>
            <button onClick={HandleFruit}> Change State of Fruit</button>
        </div>
    )
}

export default Header;
