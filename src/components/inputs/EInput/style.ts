import styled from 'styled-components';

export const EInput = styled.div`
  display: flex;

  .engrImg {
    background: url(/engravings/EngravingFrame.png) no-repeat center;
    width: 120px;
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
    padding: 5px;

    select:hover {
      cursor: pointer;
    }

    div > select {
      padding: 10px;
      color: #DDDDDD;
      background: linear-gradient(0deg, rgb(72, 89, 136), transparent);
    }

    .levels {
      display: flex;
      background: black;
      padding: 5px 0;
      margin: 5px;

      .level ~ .level {
        margin-left: 5px;
      }

      .level {
        .levelTitle {
          padding: 10px;
        
          background: #222429;
        }

        .levelNode {
          padding: 10px 0;

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
