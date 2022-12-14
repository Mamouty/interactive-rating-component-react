import styled from "styled-components";
import IRChoice from "./InteractiveRating-styled-components/IRChoice";
import IRThanks from "./InteractiveRating-styled-components/IRThanks";


function InteractiveRating() {
    return (
        <Main>
            <IRChoice/>
            {/* <IRThanks /> */}
        </Main>
    );
}

export default InteractiveRating;

/* ------------------------------Styles------------------------------ */

const Main = styled.main`
    height: 100vh;
    background-color: hsl(216, 12%, 8%);
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
`;