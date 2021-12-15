
import React from 'react';
import { useState } from 'react';

import './Question.css';
import Button from '@mui/material/Button';
import Confetti from 'react-confetti'

function Question(props) {
 const [questions, setQuestions] =  useState(props.questions);
 const [currentQIndex, setCurrentQIndex] =  useState(0);

 const [picked, setPicked] =  useState(null);
 

 function handleCorrect(selected) {
console.log(selected);
setPicked(selected);


 }
  return (
    
    <div className='main'>
{picked &&
        <div className='confetti'>
         <Confetti
        
         style={{width: "100%"}}
       />
      </div>
     }
     <h1 class='question'>{questions[currentQIndex].question}</h1>
      {questions[currentQIndex].choices.map((value, index) => 
      <div className='choice'>
        <Button onClick={() => {handleCorrect(value)}} style={{width:"85%", color: picked  ? questions[currentQIndex].correct == value  ? "green" : "red" : "" }} color= {picked ? questions[currentQIndex].correct == value ? "success" :  "error" : "primary" }variant="outlined">{value}</Button>
        </div>
      )}
   
        
   {picked &&
        <div className='confetti'>
        <h1 class='question'> {questions[currentQIndex].correct == picked  ? "Great " + questions[currentQIndex].correct + " was correct!" : picked + " was incorrect, you got the next one!"}</h1>
      </div>
     }
    </div>
  );
}

export default Question;