import styled from 'styled-components';

const Container = styled.div`
  animation: show-container 0.4s forwards ease;

  position: relative;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  opacity: 0;
  transform: translateY(3.2rem);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 16px 8px ${({ theme }) => theme.colors.shadow};
  border-top: 4px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back-to {
    align-self: flex-start;
  }

  @keyframes show-container {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Container;
