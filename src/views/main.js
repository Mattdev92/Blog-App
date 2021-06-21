import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';
import { useQuery } from '@apollo/client';
import Article from 'components/molecules/article/article';
import { getAllArticles } from 'api/querries';
import MainTemplate from 'templates/mainTemplate';
import { MainWrapper } from 'views/main.styles';

const Main = () => {
  const dispatch = useDispatch();
  const example = useSelector(({ todos }) => todos);
  console.log(example);

  const { loading, error, data } = useQuery(getAllArticles);
  if (loading) {
    return <span>loading....</span>;
  } else {
    return (
      <MainTemplate>
        <MainWrapper>
          <h1>List of latest Articles</h1>
          <button onClick={() => dispatch(todoAdded('Mat'))}>
            Click to see console log
          </button>
          {data.allArticles.map((item) => (
            <Article
              title={item.title}
              content={item.content}
              key={item.title}
            />
          ))}
        </MainWrapper>
      </MainTemplate>
    );
  }
};

export default Main;
