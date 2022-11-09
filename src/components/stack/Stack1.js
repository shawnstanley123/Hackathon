import React, { useRef,useState } from "react";
import { useStackState } from "rooks";
  import './Stack.css'
export default function App() {
    const numberToPushRef = useRef(3);
    const [box,setBox]=useState("")
    const [list, { push, pop, peek, length }, 
        listInReverse] = useStackState([1, 2, 3]);
  
    function addToStack() {
        numberToPushRef.current = numberToPushRef.current + 1;
        push(box);
    }
    const changeinput = (e) =>{
        setBox(e.target.value)
            }
  
    return (
        <>
         <input type="text" placeholder="enter the value to enter the stack" onChange={changeinput}/>
            <h1 style={{ color: 'blue', margin: '20px' }}>
                Stack</h1>
            <div style={{
                display: 'block',
                fontSize: '20px',
                margin: '20px'
            }}>
                {listInReverse.map((item) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }}
                        key={item}>{item}</div>;
                })}
            </div>
            <button className='button1' style={{
                margin: '20px',
                background: '#f8e1ee',
                width: '200px',
                borderRadius: '5px',
                padding: '10px'
            }}
                onClick={addToStack}>Push</button>
            <button className='button1' style={{
                margin: '20px',
                background: '#bbfdd8',
                width: '200px',
                borderRadius: '5px',
                padding: '10px'
                
            }}
                onClick={pop} warning>
                Pop
            </button  >
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Top Element : {peek()}</p>
  
            <p  style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Stack Size : {length}</p>
  
        </>
    );
}