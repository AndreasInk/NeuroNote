import logo from './logo.svg';
import './App.css';
import Question from './componets/Question';
function App() {
  return (
    <div className="App">
      
       
        <Question questions={[{question:"Hi", choices:["A", "B", "C"], correct:"A"}]}></Question>
     
    </div>
  );
}

export default App;
