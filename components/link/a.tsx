import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../pages/_app";



export default function A ({href, text}: any) {
    return (
        <Link href={href}>
            <StyledA>{text}</StyledA>
        </Link>
    )
}


const StyledA = styled.a`
    padding: 15px;
    color:  ${theme.white};
  
   
    `;