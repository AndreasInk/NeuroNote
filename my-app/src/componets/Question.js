
import React from 'react';
import { useState } from 'react';

import './Question.css';
import Button from '@mui/material/Button';
import Confetti from 'react-confetti'

function Question(props) {
 const [questions, setQuestions] =  useState(props.questions);
 const [currentQIndex, setCurrentQIndex] =  useState(0);
 const [showCorrect, setShowCorrect] =  useState(false);


 function handleCorrect(selected) {
console.log(selected);
setShowCorrect(selected == questions[currentQIndex].correct) 

 }
  return (
    
    <div className='main'>
{showCorrect &&
        <div className='confetti'>
         <Confetti
        
         style={{width: "100%"}}
       />
      </div>
     }
     <h1 class='question'>{questions[currentQIndex].question}</h1>
      {questions[currentQIndex].choices.map((value, index) => 
      <div className='choice'>
        <Button onClick={() => {handleCorrect(value)}} style={{width:"85%"}}variant="outlined">{value}</Button>
        </div>
      )}
   
        
     
    </div>
  );
}

export default Question;