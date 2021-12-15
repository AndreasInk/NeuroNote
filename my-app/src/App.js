import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Question from './componets/Question';
import { TextField, Button} from '@mui/material';

function App() {
  function CreateQuiz(text) {
    console.log(encodeURI(text));
    const url = 'https://quiz-api-dtqb5qffza-ue.a.run.app/Quizify?text=' + encodeURI(text)

  

  fetch(url, {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }, 
  })
  .then(response => setQuestions(response.json()))
  ;
  
  }
  const [questions, setQuestions] = useState(null)
  const  [text, setText] = useState(null)
  return (
    <div className="App">
      
       { questions &&
        <Question questions={questions}></Question>
       }

{ !questions &&
  <div className="TextField">
    <h2>Enter Text to Convert to a quiz</h2>
    <div>
       <TextField onChange={(e) => setText(e.target.value)}  style= {{margin: "auto", padding: "1%", width:"75%"}} id="outlined-basic" label="Outlined" variant="outlined" />

       </div>
       <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={() => {CreateQuiz(text)}}
            >
            Create Quiz
            </Button>
       </div>
       }
       
    
    </div>
  );
}

export default App;
