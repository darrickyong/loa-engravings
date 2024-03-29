import { baseUrl } from 'src/components/constants';
import styled from 'styled-components';

interface Props {
  scale: string;
  onClick: undefined | (() => void);
}

const divSize = 130;
const imgSize = 90;

const getBackground = (scale: string) => {
  if (scale === 'none') return `url(${baseUrl}/engravings/EngravingFrame.png) no-repeat center`;
  return 'none';
};

export const EngravingImage = styled.div<Props>`
  &:hover {
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
    opacity: ${({ onClick }) => (onClick ? 0.25 : 1)};
  }

  background: ${({ scale }) => getBackground(scale)};
  background-size: contain;
  width: ${({ scale }) => (scale === 'none' ? `${divSize}px` : 'none')};
  height: ${({ scale }) => (scale === 'none' ? `${divSize}px` : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${({ scale }) => (scale === 'none' ? `${imgSize}px` : `${parseFloat(scale) * imgSize}px`)};
    border-radius: 50%;
  }
`;
