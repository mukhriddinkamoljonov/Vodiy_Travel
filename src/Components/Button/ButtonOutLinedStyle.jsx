import styled from "styled-components";

export const ButtonOuter = styled.button`
  button {
    margin: 10px;
    border-radius: 25px;
    padding: 15px 30px;
    border: 2px solid #fff;
    transition: background-color 0.3s, border-color 0.3s;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
    @media (max-width: 460px) {
      padding: 15px 10px;
      width: 250px;
      margin: 5px;
    }
  }

  button:hover {
    border-color: #00a795;
    background: #00a795;
  }
`;
