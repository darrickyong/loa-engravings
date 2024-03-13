import styled from 'styled-components';

export const SInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .engrCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    height: 120px;
    width: 100%;

    .title {
      display: flex;
      align-items: center;
      background: linear-gradient(0.25turn, #172333, #202938, #131d29);
      height: 40%;
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
      vertical-align: middle;
      background: black;
      height: 72px;
      border-radius: 5px;
      margin-top: 5px;

      img {
        width: 50px;
        height: 50px;
      }
      img:hover {
        cursor: pointer;
      }
    }
  }
`;
