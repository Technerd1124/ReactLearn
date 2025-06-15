
import { use, useState } from 'react';
const Counter = () => {
    const [ count, setCount] = useState(0);
    const [ Display, SetDisplay]=useState(true);
    return(
        <div>

               <button onClick={ ()=> SetDisplay(!Display)}> Toggle Name</button>

            {
                Display? <h1> Name :Dhanshri Londhe</h1>:null
            }
           
        
          <h1>Counter: {count}</h1>
            <button onClick={ ()=>setCount(count + 1)}> Update Counter</button>
          <br />
            <button onClick={ ()=>setCount(count - 1)}> Decrement  Counter</button>
      <br />
            <button onClick={ ()=>setCount(0)}> reset  </button>
        </div>
    )
}



 export  default Counter;