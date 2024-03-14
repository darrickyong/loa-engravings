import styled from 'styled-components';

export const AccInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 76px - 96px);
  min-width: 900px;
  gap: 2em;

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
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5em;
    max-width: 900px;
  }
`;
