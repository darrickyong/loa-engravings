import styled from 'styled-components';
import { isMobile } from '../constants';

export const Results = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  justify-content: ${isMobile ? 'flex-start' : 'center'};
  align-items: ${isMobile ? 'center' : 'flex-start'};
  width: 100%;
  overflow-y: hidden;
  gap: 2em;
  margin-bottom: 1.5em;

  .existing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1em;
  height: 100%;
  
  .results-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
    overflow-y: auto;
    gap: 1em;
  }
`;
