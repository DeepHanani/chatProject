import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {  reciverMes } from '../action/PostAction';
import './ReciveMes.css'

export default function ReciveMes() {


    const message = useSelector(y=>y)
    console.log(message,"aaaaaa")

    const dispatch = useDispatch();

    const[recive,setRecive] = useState([]);
    // console.log(recive,"reciver user")

    const onhandalChange = (e)=>{
        e.preventDefault()

        setRecive({...recive , [e.target.name] : e.target.value});

    }

    const onsubmited = (e)=>{
        e.preventDefault()
         
         
        if(document.getElementById("field2").value != ""){
            dispatch(reciverMes(recive));
        }
        document.getElementById("field2").value = "";
    }
     

  return (
    <div className='recivemainDiv'>

    <div className='reciceChild1'>
    <div className='recciverImg'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUuzILc-rywzLPVc29kfstOgM5PNphnSgx_m58CDS9W0uweLWs4wycZeHj7q7tgNd_lE&usqp=CAU'/>
    </div>
    <div className='nameDive'>
      <div><h4>Ravi Sir <br></br><small>(online)</small></h4></div>
      
    </div>

    </div>

    <div className='chat'>

    {
        message.post.map((value)=>{
                 return(
                    <div className='valuename'>
                    <p>{value.firstname}</p>
                    </div>
                  
                 )
        })
   
       }
    
       </div>

    
<div className='typing'>
<input type='text' onChange={onhandalChange} name = "recive" placeholder='Message' id='field2'/>
    <div className='btnDiv'><button onClick={onsubmited}>Send</button></div>

</div>
    
    
    </div>
  )
}
