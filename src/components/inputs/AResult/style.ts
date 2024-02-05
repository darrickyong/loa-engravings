import styled from 'styled-components';

interface Props {
  $bgImg: string;
}

export const AResultTooltip = styled.a<Props>`
  :hover {
    cursor: pointer;
  }

  .img-container {
    background-image: url(${p => p.$bgImg});
  }
`;
