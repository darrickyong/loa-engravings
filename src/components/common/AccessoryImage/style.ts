import styled from 'styled-components';

interface Props {
  $bgImg: string;
}

export const AccessoryImage = styled.div<Props>`
  background: url(${({ $bgImg }) => $bgImg}) no-repeat center;
  background-size: contain;
  padding: 5px;
  border-radius: 5px;
`;
