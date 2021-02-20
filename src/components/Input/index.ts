import styled from 'styled-components';

const Input: any = styled.input`
  width: 100%;
  height: 4rem;
  border: 2px solid ${({ theme }) => theme.colors.shadow};
  border-radius: 0.5rem;
  background-color: #fff;

  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
  }
`;

Input.Field = styled.div`
  position: relative;

  &:focus-within::after {
    content: '';

    position: absolute;
    width: calc(100% - 4px);
    height: 0.2rem;

    border-radius: 0 0 0.5rem 0.5rem;
    background-color: #83b636;

    bottom: 0.2rem;
    left: 0;
    transform: translateX(2px);
  }

  &.invalid::after {
    background-color: red;
  }
`;

export default Input;