import styled from 'styled-components';

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  gap: 2em;

  .existing {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .results-list {
    margin: 1.5em 0;
    overflow-y: auto;
  }
`;
