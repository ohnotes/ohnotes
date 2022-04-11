import styled from 'styled-components';

export const Container = styled.div`
    textarea {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(20, 20, 20);
        width: 100%;
        height: 100%;
        color: black;
        resize: none;
        border: none;
        padding: 10px 0 0 10px;
        color: rgb(240, 240, 240);
    }

    @media (max-width: 800px) {
        textarea {
            font-size: 12pt;
        }
    }
`;
