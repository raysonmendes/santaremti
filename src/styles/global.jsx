import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FAFAFA;
        /* --background-dark: rgb(21, 32, 43);
        --title-dark: #fff;
        --text-dark: #fff; */
        


    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body{
        background: --background;
    }

    body, button{
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
    }

    button{
        font-size: 20px;
        line-height: 24px;
    }

    h1, h2, h3, h4, h5, stron {
        font-weight: 600;
    }

    a{
        font-family: 'Manrope', sans-serif;
        text-decoration: none;
    }

     html{
         @media(max-width: 1200px){
             font-size: 93.75%;
         }
         @media(max-width: 640px){
             font-size: 87.5%;
         }
     }
     html { scroll-behavior: smooth; }

`;
