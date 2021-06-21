import {
  ArticleWrapper,
  Title,
  ContentSection,
} from 'components/molecules/article/article.styles';

const Article = ({ title, content }) => {
  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <ContentSection>{content}</ContentSection>
    </ArticleWrapper>
  );
};
export default Article;
