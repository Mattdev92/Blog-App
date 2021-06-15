import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const asas = useSelector((state) => state);
  console.log(asas);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
