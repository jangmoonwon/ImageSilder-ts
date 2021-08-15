import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    body{
        background: #1E1E22;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 1.5;
        margin: 0 auto;
        word-break: keep-all;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
    }
`;