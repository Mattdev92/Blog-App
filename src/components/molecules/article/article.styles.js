import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  margin: 30px 0;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;
export const ContentSection = styled.section`
  text-align: center;
  text-justify: auto;
  height: 200px;
  width: 100%;
`;
export const Image = styled.img`
  width: auto;
  height: 100px;
`;
