import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';
import { useQuery } from '@apollo/client';
import Article from 'components/molecules/article/article';
import { getAllArticles } from 'api/querries';
import Button from 'components/atoms/button/button';
import Title from 'components/atoms/title/title';

const ArticleList = () => {
  const dispatch = useDispatch();
  const example = useSelector(({ todos }) => todos);

  const { loading, error, data } = useQuery(getAllArticles);
  if (loading) {
    return <span>Loading....</span>;
  }
  if (error) {
    return <span>Sory for enconvinience. Database in anavailable</span>;
  } else {
    return (
      <>
        <Title size={32}>List of latest Articles</Title>
        <Button
          onClick={() => {
            alert(example);
            dispatch(todoAdded('Mat'));
          }}
        >
          Click me
        </Button>
        {data.allArticles.map((item) => (
          <Article
            title={item.title}
            content={item.content}
            url={item.image.url}
            alt={item.image.alt}
            key={item.title}
          />
        ))}
      </>
    );
  }
};

export default ArticleList;
