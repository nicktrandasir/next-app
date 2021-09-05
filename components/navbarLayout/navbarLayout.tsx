import React from "react";
import A from "../link/a";
import styled from "styled-components";
import { theme } from "../../pages/_app";
import Head from "next/head";

const NavbarLayout = ({ children, keywords }: any) => {
  return (
    <div>
        <Head>
            <meta keywords={keywords}></meta>
            <title>Next-App</title>

        </Head>
      <StyledNavbar>
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />

      </StyledNavbar>
      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;

const StyledNavbar = styled.div`
  display: flex;
  height: 7vh;
  background: ${theme.lightRed};
  color: ${theme.white};
  margin-top: 5px;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
 
  
`;
