import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 1rem;

  div {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 18px;
    width: 120px;
  }

  div ~ div {
    margin-left: 5em;
  }

  div:hover {
    cursor: pointer;
    background-color: #2b2b2b;
  }
`;
