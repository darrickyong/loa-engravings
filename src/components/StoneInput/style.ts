import styled from 'styled-components';

export const StoneInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 76px - 96px);
  min-width: 775px;
  width: 100%;

  .title {
    font-size: 1.5rem;
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
