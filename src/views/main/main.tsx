import React from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import ArticleList from 'components/molecules/articleList/articleList';

const Main: React.FC = () => {
  return (
    <MainTemplate>
      <ArticleList />
    </MainTemplate>
  );
};

export default Main;
