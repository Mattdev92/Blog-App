import React from 'react';
import {
  ArticleWrapper,
  ContentSection,
  Image,
} from 'components/molecules/article/article.styles';
import Title from 'components/atoms/title/title';
import { ArticleTypes } from './article.types';

const Article: React.FC<ArticleTypes> = ({ title, content, url, alt }) => {
  return (
    <ArticleWrapper>
      <Title size={16}>{title}</Title>
      <Image src={url} alt={alt} />
      <ContentSection>{content}</ContentSection>
    </ArticleWrapper>
  );
};
export default Article;
