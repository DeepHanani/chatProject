import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { postMES } from '../action/PostAction';
import ReciveMes from './ReciveMes';
import './ReciveMes.css'

export default function PostMes() {

    const[input , setInput] = useState([]);

    const message2 = useSelector(y=>y);
    console.log(message2,"qqqq")

    console.log(input,"kkkkk")

    const dispatch = useDispatch();

    const handalchange = (e)=>{
        e.preventDefault()
        setInput({...input ,[e.target.name] :e.target.value});
    }

    const onsubmit = (e)=>{
        e.preventDefault()
     
      
      if( document.getElementById("field").value !=""){
        dispatch(postMES(input));
      }
      document.getElementById("field").value="";
    }


  return (
    <div className='large'>
    <div className='whatsuapp'><h1>....WhatsAPP....</h1></div>
    <div className='bigDIV'>
    
    <div className='recivemainDiv'>

    <div className='reciceChild1'>
    <div className='recciverImg'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8a2MUfdySK0SpBsRoLJ7GvrRP0mMIkixcw&usqp=CAU'/>
    </div>
    <div className='nameDive'>
      <div><h4>Deep Hanani <br></br> <small>(online)</small></h4></div>
    </div>

    </div>

    <div className='chat'>

    {
        message2.recive.map((value)=>{
    
            return(
                <div className='valuename'>
                <p>{value.recive}</p>
               
                </div>
            )
    
        })
    }
    
       </div>

    
<div className='typing'>
<input type='text' onChange={handalchange} name = "firstname" placeholder='Message' id='field'/>
    <div className='btnDiv'><button onClick={onsubmit}>Send</button></div>

</div>
    
    
    </div>
   <ReciveMes/>
    </div>
    </div>
  )
}
