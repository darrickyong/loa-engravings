import styled from 'styled-components';

interface Props {
  disabled: boolean;
}

export const AInput = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;

  .eng1,
  .eng2 {
    display: flex;
    align-items: center;

    .engrSelect {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;

      select {
        color: #f3f3dd;
      }

      .selectQty {
        width: 40px;
      }
    }
  }
`;
