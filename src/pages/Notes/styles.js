import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;

    textarea {
        background-color: rgb(20, 20, 20);
        width: 100%;
        height: 100%;
        color: black;
        outline: none;
        border: none;
        padding: 10px 0 0 10px;
        color: rgb(240, 240, 240);
        font-family: "JetBrains Mono", monospace;
    }
`;
