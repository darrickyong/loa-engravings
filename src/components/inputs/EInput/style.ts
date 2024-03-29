import styled from 'styled-components';

interface Props {
  value: number;
}

const calculateTitleBackground = (level: number, value: number) => {
  switch (level) {
    case 1:
      return value < 5 || value > 9 ? '#222429' : 'linear-gradient(178deg, rgb(90, 101, 142), rgba(255, 254, 254, 0))';
    case 2:
      return value < 10 || value > 14
        ? '#222429'
        : 'linear-gradient(178deg, rgb(90, 101, 142), rgba(255, 254, 254, 0))';
    case 3:
      return value < 15 ? '#222429' : 'linear-gradient(178deg, rgb(222, 137, 31), rgba(255, 254, 254, 0))';
    default:
      return '#222429';
  }
};

export const EInput = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;

  .engrCol {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    
    select {
      background: ${({ value }) =>
        value < 15
          ? 'linear-gradient(0deg, rgb(72, 89, 136), transparent)'
          : 'linear-gradient(rgb(179, 124, 56), rgba(249, 248, 248, 0))'};
    }

    .levels {
      display: flex;
      justify-content: space-evenly;
      background: black;
      padding: 5px;
      border-radius: 0 0 5px 5px;

      .level ~ .level {
        margin-left: 5px;
      }

      .level {
        width: 100%;

        &:hover{
          cursor: pointer;
        }

        .levelTitle1,
        .levelTitle2,
        .levelTitle3 {
          padding: 10px;
          border-radius: 5px;
        }

        .levelTitle1 {
          background: ${({ value }) => calculateTitleBackground(1, value)};
        }
        .levelTitle2 {
          background: ${({ value }) => calculateTitleBackground(2, value)};
        }
        .levelTitle3 {
          background: ${({ value }) => calculateTitleBackground(3, value)};
        }

        .levelNode {
          display: flex;
          justify-content: space-evenly;
          padding-top: 5px;

          img {
            width: 30px;
            height: 30px;
          }
          img:hover {
            cursor: pointer;
          }
          img ~ img {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
