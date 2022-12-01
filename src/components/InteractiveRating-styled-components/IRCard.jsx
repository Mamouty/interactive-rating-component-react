import styled from "styled-components";

const Card = styled.div`
  width: 380px;
  height: 380px;
  padding: 30px;
  border-radius: 30px;
  background: hsl(213, 19%, 18%)
    radial-gradient(
      circle at 50% 0%,
      hsl(199, 23%, 22%),
      hsl(218, 29%, 16%) 70%
    );

  @media (max-width: 400px) {
    width: 345px;
    height: 370px;
    border-radius: 20px;
  }
`;

export default Card;