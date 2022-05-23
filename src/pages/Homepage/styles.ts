import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background };
  height: 100vh;
  width: 100vw;

  > div:not(:first-child) {
    padding: 0 5vw;
    margin-top: 5rem;
  }
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.secondary };

    :first-child {
      font-size: 10rem;
      font-weight: bold;
    }

    :last-child {
      span:first-child {
        margin-right: 4rem;
      }
    }
  }

  img {
    width: 30rem;
    height: auto;
  }
`;