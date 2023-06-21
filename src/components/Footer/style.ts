import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px;
  font-size: 24px;

  div {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 24px;
  }

  div ~ div {
    margin-left: 5em;
  }

  div:hover {
    cursor: pointer;
    background-color: #2b2b2b;
  }
`;
