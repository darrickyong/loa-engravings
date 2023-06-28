import styled from 'styled-components';

export const SInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .engrImg {
    background: url(/engravings/EngravingFrame.png) no-repeat center;
    width: 140px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 96px;
      height: 96px;
      border-radius: 50%;
    }
  }

  .engrCol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    height: 120px%;
    width: 100%;

    .title {
      display: flex;
      align-items: center;
      background: linear-gradient(0.25turn, #172333, #202938, #131d29);
      height: 40%;
      border-radius: 2px;

      .counter {
        display: flex;
        padding: 10px;
        color: #5c90b6;
      }
    }

    div > select {
      padding: 10px;
      color: #dddddd;
    }

    select:hover {
      cursor: pointer;
    }

    .level {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      vertical-align: middle;
      background: black;
      height: 72px;
      border-radius: 2px;
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
