import styled from 'styled-components';
import { baseUrl } from '../constants';

export const StoneInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  overflow-y: auto;

  .stoneBG {
    background: url(${baseUrl}/engravings/StoneBackground.jpeg) no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    min-width: 845px;
    min-height: 775px;

    .top {
      height: 39%;
    }

    .bot {
      height: 61%;
      padding: 0 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
