import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
    --webkit-font-smoothing:antialiased;
;
}

body, input ,button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    outline: none;
}
a:visited,a{
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ROSE};
 }


 

 button, a{
    transition: filter 0.2s;
    cursor:pointer;

    &:hover{
        
    filter:brightness(0.9)
} 
}

`;
