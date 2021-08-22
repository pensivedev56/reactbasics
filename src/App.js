import logo from './logo.svg';
import './App.css';
import Math from './Subjects/Math';
import MathClass from './Subjects/MathClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Hello World, It's time to learn.
        </p>
        <hr></hr>
        <Math/> 
        <hr></hr>  
        <MathClass></MathClass>     
      </header>
    </div>
  );
}

export default App;
