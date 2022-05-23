import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 2rem;
  width: 6rem;
  border-radius: 5rem;
  position: relative;

  * {
    cursor: pointer;
  }

  input {
    visibility: hidden;

    :checked + label {
      transform: translateX(4rem);
      box-shadow: ${({ theme }) => `-3px 3px 3px ${theme.colors.secondary}`};

    }
  }

  label {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    position: relative;
    top: -.5rem;
    left: -2rem;
    box-shadow: ${({ theme }) => `3px 3px 3px ${theme.colors.secondary}`};
  }
`;
