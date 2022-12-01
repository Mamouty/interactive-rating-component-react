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

  h1 {
    margin: 30px 0 15px;
    color: white;
    font-weight: 400;
    font-size: 1.7rem;
  }

  p {
    margin: 10px 0;
    color: hsl(217, 12%, 63%);
    font-size: 0.9rem;
  }

  @media (max-width: 400px) {
    width: 345px;
    height: 370px;
    border-radius: 20px;
  }
`;

export default Card;