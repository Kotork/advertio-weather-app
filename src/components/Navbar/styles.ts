import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;