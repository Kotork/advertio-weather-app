import styled from 'styled-components';

export const Container = styled.div`
  padding: .8rem 1.5rem;

  * {
    cursor: pointer;
  }

  input {
    display: none;
  }

  label {
    text-transform: capitalize;
  }

  :hover {
    border-radius: ${({ theme }) => theme.borderRadius };
    background-color: ${({ theme }) => theme.colors.primary };
    cursor: pointer;

  }
`;