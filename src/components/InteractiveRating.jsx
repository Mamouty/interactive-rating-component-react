import {useState} from "react";
import styled from "styled-components";
import IRChoice from "./InteractiveRating-styled-components/IRChoice";
import IRThanks from "./InteractiveRating-styled-components/IRThanks";


function InteractiveRating() {
    const [isRated, setIsRated] = useState(0);

    const handleRender = (e, number) => {
        console.log(e);
        console.log(number);
        setIsRated(number);
    }

    return (
        <Main>
            {isRated === 0 ? <IRChoice rating={isRated} onRender={handleRender}/> : <IRThanks rating={isRated}/>}
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