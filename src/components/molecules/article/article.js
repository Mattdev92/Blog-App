import {
  ArticleWrapper,
  ContentSection,
  Image,
} from 'components/molecules/article/article.styles';
import Title from 'components/atoms/title/title';

const Article = ({ title, content, url, alt }) => {
  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <Image src={url} alt={alt} size={16} />
      <ContentSection>{content}</ContentSection>
    </ArticleWrapper>
  );
};
export default Article;
