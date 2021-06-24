import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';
import { useQuery } from '@apollo/client';
import Article from 'components/molecules/article/article';
import { getAllArticles } from 'api/querries';
import MainTemplate from 'templates/mainTemplate/mainTemplate';

const Main = () => {
  const dispatch = useDispatch();
  const example = useSelector(({ todos }) => todos);
  console.log(example);

  const { loading, error, data } = useQuery(getAllArticles);
  console.log(data);
  if (loading) {
    return <span>loading....</span>;
  }
  if (error) {
    return <span>Sory for enconvinience. Database in anavailable</span>;
  } else {
    return (
      <MainTemplate>
        <h1>List of latest Articles</h1>
        <button onClick={() => dispatch(todoAdded('Mat'))}>Click me</button>
        {data.allArticles.map((item) => (
          <Article
            title={item.title}
            content={item.content}
            url={item.image.url}
            alt={item.image.alt}
            key={item.title}
          />
        ))}
      </MainTemplate>
    );
  }
};

export default Main;
