import styled from "styled-components";

export const DiscountContainer = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 129.837px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(http://www.xondoppitravel.com/admin/files/Summer-in-Sunny-Dubai-00.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-size: 60px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 0;

  @media (max-width: 720px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 32px;
    }
  }
`;
