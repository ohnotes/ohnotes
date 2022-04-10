import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');
    
    background-color: blue; 

    textarea {
        font-family: "JetBrains Mono", monospace;
        position: absolute;
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
`;
