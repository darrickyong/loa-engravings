import styled from 'styled-components';

export const BookInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 76px - 96px);
  width: 100%;

  .title {
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: #00ffff;
  }

  .books {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
