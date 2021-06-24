import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px solid lightgrey;
  color: black;
  cursor: pointer;
  width: 100%;
  letter-spacing: 2px;
`;
