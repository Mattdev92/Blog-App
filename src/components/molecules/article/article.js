import {
  ArticleWrapper,
  Title,
  ContentSection,
  Image,
} from 'components/molecules/article/article.styles';

const Article = ({ title, content, url, alt }) => {
  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <Image src={url} alt={alt} />
      <ContentSection>{content}</ContentSection>
    </ArticleWrapper>
  );
};
export default Article;
