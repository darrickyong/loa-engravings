import styled from 'styled-components';

export const BInput = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .engrCol {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    height: 120px;
    width: 100%;

    .engrSelect {
      display: flex;
      align-items: center;
      background: linear-gradient(0.25turn, #172333, #202938, #131d29);
      height: 30%;
      border-radius: 5px;

      .counter {
        display: flex;
        padding: 10px;
        color: #5c90b6;
      }
    }

    .level {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 5px;
      padding-top: 5px;

      .selected {
        filter: grayscale(0);
      }
      .unselected {
        filter: grayscale(100%);
      }

      div > img {
        display: block;
        height: 60px;
        width: 60px;
        border-radius: 5px;
      }
      div > img:hover {
        cursor: pointer;
      }
    }
  }
`;
