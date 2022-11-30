import styled from "styled-components";
import IRChoice from "./InteractiveRating-styled-components/IRChoice";

const Main = styled.main`
    height: 100vh;
    background-color: hsl(216, 12%, 8%);
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
`;

function InteractiveRating() {
    return (
        <Main>
            <IRChoice/>
        </Main>
    );
}

export default InteractiveRating;