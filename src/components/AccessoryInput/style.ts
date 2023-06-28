import styled from 'styled-components';

export const AccInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: scroll;

  .title {
    font-size: 20px;
    margin-bottom: 5px;
    color: #00ffff;
  }

  .accessories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
  }
`;
