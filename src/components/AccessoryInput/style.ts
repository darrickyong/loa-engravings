import styled from 'styled-components';

export const AccInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 76px - 96px);
  width: 100%;

  .title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: #00ffff;
  }

  .useAncients {
    input:hover {
      cursor: pointer;
    }
    label:hover {
      cursor: pointer;
    }
    label {
      padding-left: 5px;
    }
  }
  
  .accessories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 25px 50px;
    /* overflow: scroll; */
  }
`;
