import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoAdded } from 'slices/createSliceTodo';
import { useQuery } from '@apollo/client';
import Article from 'components/molecules/article/article';
import { getAllArticles } from 'api/querries';
import Button from 'components/atoms/button/button';
import Title from 'components/atoms/title/title';
import { RootState } from './articleList.types';
import { AppDispatch } from 'store/store';
import { ArticlesDataType } from './articleList.types';

const ArticleList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const example = useSelector<RootState>(({ todos: { author } }) => author);

  const { loading, error, data } = useQuery<ArticlesDataType>(getAllArticles);
  if (loading || error) {
    return (
      <>
        {loading ? (
          <span>Loading....</span>
        ) : (
          <span>Sory for enconvinience. Database in anavailable</span>
        )}
      </>
    );
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
        {data &&
          data.allArticles.map((item) => (
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
