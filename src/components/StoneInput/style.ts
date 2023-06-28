import styled from 'styled-components';

export const StoneInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .title {
    font-size: 20px;
    margin-bottom: 5px;
    color: #00ffff;
  }

  .stoneBG {
    background: url(/engravings/StoneBackground.jpeg) no-repeat center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 775px;

    .top {
      height: 40%;
    }

    .bot {
      height: 60%;
      padding: 20px 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
