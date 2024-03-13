import { baseUrl } from 'src/components/constants';
import styled from 'styled-components';

interface Props {
  scale: string;
}

const divSize = 140;
const imgSize = 80;

const getBackground = (scale: string) => {
  if (scale === 'none') return `url(${baseUrl}/engravings/EngravingFrame.png) no-repeat center`;
  return 'none';
};

export const EngravingImage = styled.div<Props>`
  &:hover {
    cursor: pointer;
  }

  background: ${({ scale }) => getBackground(scale)};
  /* background-size: 70px 70px; */
  width: ${({ scale }) => (scale === 'none' ? `${divSize}px` : "none")};
  height: ${({ scale }) => (scale === 'none' ? `${divSize}px` : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  /* scale: ${({ scale }) => scale}; */

  img {
    /* width: 80px;
    height: 80px; */
    width: ${({ scale }) => (scale === 'none' ? `${imgSize}px` : `${parseFloat(scale) * imgSize}px`)};
    height: ${({ scale }) => (scale === 'none' ? `${imgSize}px` : `${parseFloat(scale) * imgSize}px`)};
    border-radius: 50%;
  }
`;
