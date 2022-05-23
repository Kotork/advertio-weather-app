import styled from 'styled-components';

interface IContainer {
  isSelected: boolean
}

export const Container = styled.div<IContainer>`
  width: 20rem;
  display: flex;
  flex-direction: column;
  position: relative;

  > div {
    background-color: ${({ theme }) => theme.colors.secondary };
    border-radius: ${({ theme }) => theme.borderRadius };
    color: white;

    :first-child {
      padding: 12px 24px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        text-transform: capitalize;
      }

      svg {
        fill: white;
        height: 1.8rem;
        width: auto;
        transform: ${({ isSelected }) => isSelected && 'rotateX(180deg)'};
      }
    }

    :nth-child(2) {
      position: absolute;
      top: 5rem;
      max-height: ${({ isSelected }) => isSelected ? '20rem' : '0' };
      padding: ${({ isSelected }) => isSelected ? '12px 24px' : '0' };
      width: 100%;
      opacity: ${({ isSelected }) => isSelected ? '1' : '0' };
      overflow: hidden;
      overflow-y: ${({ isSelected }) => isSelected && 'scroll'};
    }
  }
`;