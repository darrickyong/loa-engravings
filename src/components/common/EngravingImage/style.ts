import { baseUrl } from 'src/components/constants';
import styled from 'styled-components';

interface Props {
  scale: string;
}

export const EngravingImage = styled.div<Props>`
  &:hover {
    cursor: pointer;
  }

  background: url(${baseUrl}/engravings/EngravingFrame.png) no-repeat center;
  width: 140px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: ${({ scale }) => scale};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
