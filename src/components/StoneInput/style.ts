import styled from 'styled-components';
import { baseUrl } from '../constants';

export const StoneInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 76px - 96px);
  min-width: 775px;
  width: 100%;

  .stoneBG {
    background: url(${baseUrl}/engravings/StoneBackground.jpeg) no-repeat;
    display: flex;
    flex-direction: column;
    width: 775px;
    height: 845px;

    .top {
      height: 36%;
    }

    .bot {
      height: 55%;
      padding: 0 3rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: space-evenly;
    }
  }
`;
