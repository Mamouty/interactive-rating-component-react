import React, { useState } from "react";
import styled, {css} from "styled-components";
import Card from "./IRCard";

function CreateList(props) {
    const [active, setActive] = useState("");

    const handleClick = (e, number) => {
        console.log(e);
        console.log(number);
        setActive("white");
    }

    return(
        <CircularLi onClick={event => handleClick(event, props.id)} >{props.value}</CircularLi>
    );
}

function IRChoice() {
    const list = [1, 2, 3, 4, 5];
    const listItems = list.map((number) =>
        <CreateList key={number.toString()} id={number.toString()} value={number} />
    );

    return(
        <ChoiceSide>
            <CircularDiv>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </CircularDiv>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <ol>
                {listItems}
            </ol>
            <Button>SUBMIT</Button>
        </ChoiceSide>
    );
}

export default IRChoice;

/* ------------------------------Styles------------------------------ */

const ChoiceSide = styled(Card)`
  ol {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    div, li  {
        width: 40px;
        height: 40px;
    }

    h1 {
        margin-top: 20px;
    }

    button {
        padding: 14px;
    }
`;

const Circle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 45px;
  height: 45px;
  background-color: hsl(202, 20%, 22%);
`;

const CircularDiv = styled.div`
  ${Circle};
`; 

const CircularLi = styled.li`
  ${Circle};
  margin: 10px 0 13px;
  color: ${props => props.white ? "white" : "gray"};
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s ease-in-out;


  &:hover {
    background-color: hsl(25, 97%, 53%);
    color: white;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 100px;
  font-weight: 700;
  background-color: hsl(25, 97%, 53%);
  color: white;
  letter-spacing: 0.3rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: white;
    color: hsl(25, 97%, 53%);
  }
`;