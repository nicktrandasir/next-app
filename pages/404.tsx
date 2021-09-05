import A from "../components/link/a";
import React from "react";
import styled from "styled-components";

export default function Error() {

    return (
        <StyledError>
            <div style={{fontSize: "48px", color: "red"}}>
                404 | Page not found!
            </div>



            <span style={{fontSize: "24px"}}>Вернуться на главную    <A href={"/"} text="главную" /> страницу</span>

        </StyledError>
    )
}

const StyledError = styled.div`
  display: grid;
  justify-content: center; 
  grid-template-rows: 50px 50px;
  align-content: center;
  height: 100vh;
`;