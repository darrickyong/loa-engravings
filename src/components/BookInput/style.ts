import styled from 'styled-components';

export const BookInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .title {
    font-size: 20px;
    margin-bottom: 5px;
    color: #00ffff;
  }

  .books {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
