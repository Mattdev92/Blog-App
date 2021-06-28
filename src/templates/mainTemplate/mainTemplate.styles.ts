import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: grid;
  grid-template-areas:
    'aside nav'
    'aside main'
    'footer footer';
  height: 100vh;
  width: 100vw;
`;
