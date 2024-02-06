import { baseUrl } from 'src/components/constants';
import styled from 'styled-components';

interface Props {
  disabled: boolean;
}

export const AInput = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 10px;

  select {
    line-height: 20px;
    color: #dddddd;
    margin: 10px;
  }

  select:hover {
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  }

  .eng1,
  .eng2 {
    display: flex;
    margin: 10px;

    .engrImg {
      background: url(${baseUrl}/engravings/EngravingFrame.png) no-repeat center;
      width: 140px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }

    .engrSelect {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .selectEngr {
        color: #f3f3dd;
      }
    }
  }
`;
