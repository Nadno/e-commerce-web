import styled from 'styled-components';
import Container from '../Container/style';

const StyledHeader = styled(Container)`
  width: 100%;
  height: 5rem;
  padding: 0;

  border-top: none;

  nav {
    height: 100%;
  }

  .list {
    display: block;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 2rem;
  }
`;

export default StyledHeader;
