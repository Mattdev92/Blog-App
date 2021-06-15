import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';

function App() {
  const dispatch = useDispatch();
  const asas = useSelector(({ todos }) => todos);
  console.log(asas);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => dispatch(todoAdded('Mat'))}>Click</button>
    </div>
  );
}

export default App;
