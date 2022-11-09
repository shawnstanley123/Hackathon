import React,{useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import animate from './animate'
import './Stack.css'
export default function NewStack() {
    const [box,setBox]=useState("")
   const [array,setArray]=useState([])
    console.log(array)
    c
    const push = (box) =>{
setArray(...array,box)
console.log(array)
    }
  return (
    <div className='page'>
        <div className="header">
        <div className="bucket">
            <h2>{box}</h2>
        </div>
        <div className="take">
            
        <input type="text" placeholder="enter the value to enter the stack" onChange={changeinput}/>
      <Stack spacing={2} direction="row">
      
      <Button variant="outlined" style={{marginLeft:"40%",marginTop:"10%",height:"40px"}} onClick={push} id="push">Push</Button>
      <Button variant="outlined" style={{marginTop:"10%",height:"40px"}}>Pop</Button>
      
    </Stack>  
        </div>
        </div>
        <div className="bucketlist">
            {array.map((item)=>(<div className="bucket1">
            <h2>{item}</h2>
        </div>))}
        
        
        </div>
        </div>
  )
}
