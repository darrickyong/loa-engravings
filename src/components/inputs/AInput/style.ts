import styled from 'styled-components';

export const AInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 1em;

  .engravings {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .eng1,
    .eng2 {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 350px;
      min-height: 45px;

      .engrSelect {
        display: flex;
        justify-content: space-between;

        select {
          color: #f3f3dd;

          &:hover {
            cursor: pointer;
          }
        }

        .selectQty {
          font-family: 'Georgia', 'serif';
          width: 40px;
        }
      }
    }
  }
`;
