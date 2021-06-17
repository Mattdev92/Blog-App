import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  {
    allArticles {
      title
      content
      image {
        alt
        url
      }
    }
  }
`;
function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(query);
  console.log(data);
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
