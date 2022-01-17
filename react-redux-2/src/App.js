import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { Todos } from './components/Todos';
import { Counter } from './components/Counter';

function App() {
  
  return (
    <div className="App">
      <Counter />
     <Todos />
    </div>
  );
}

export default App;
