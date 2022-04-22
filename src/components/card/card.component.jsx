import React, { useState } from 'react';
import './card.styles.css';

 


function info (grade){
    document.getElementById(grade).innerHTML=grade;
}



export const Card = (props) => {

    const [text, setText] =useState('');
    
    const handleClick =(event) => {
        console.log(text)
        alert ("Comment entered : " + (event))
    }
    
    function clickFunc (grade){
        setText(document.getElementById(grade).value);
        document.getElementById(grade).value=""
    }

    return (
    <div className='card-container'>
       <img alt ="student" src = {`https://placeimg.com/300/300/people/${props.student.id}`} />     
            <h2> {props.student.name}</h2>
            <p>ID: {props.student.student_id}</p>      
            <button onClick={() => {info(props.student.grade)}}>
            
            CW Score</button>
            <p2 id={props.student.grade}></p2 >     
            
            <div className='comment'>
            <textarea id= {props.student.student_id}
            className="Comment"
            type='Comment'
            placeholder='Add Comment'

            />
            <comment>{text}</comment>
            
            <button2 onClick={ () =>{clickFunc(props.student.student_id)}}     >Submit</button2>
            
                 
            </div>
           
    </div>  
)
    
}


 