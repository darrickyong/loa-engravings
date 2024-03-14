import styled from 'styled-components';

export const AResultTooltip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 1em;
  width: 230px;

  .engravings {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .eng1,
    .eng2 {
      display: flex;
      align-items: center;
      gap: 1em;

      .engr {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0.5em;

        div {
          display: flex;
          align-items: center;
          text-align: left;
        }

        .qty {
          width: 40px;
        }
      }
    }
  }
`;