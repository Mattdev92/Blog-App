import styled from 'styled-components';
import { TitleTypes } from './title.types';

export const TitleWrapper = styled.span<TitleTypes>`
  text-align: center;
  height: 100px;
  width: 100%;
  font-family: 'Kirang Haerang', cursive;
  font-size: ${({ size }) => `${size}px`};
`;
