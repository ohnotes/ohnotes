import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        &::-webkit-scrollbar {
            background-color: rgb(25, 25, 25);
            border-radius: 5px;
            width: 7px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(40, 40, 40);
            border-radius: 10px;
        }
    }
`;
