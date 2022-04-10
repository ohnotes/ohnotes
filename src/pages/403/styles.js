import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400&display=swap');

    font-family: "JetBrains Mono", monospace;
    text-align: center;
    color: white;
    background-color: rgb(16, 16, 16);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;

    img {
        margin-top: 100px;
        animation: infinite 5s breath;
    }

    a {
        text-decoration: none;
        color: #f75632;
    }

    a p {
        margin-top: 40px;
        font-size: 15pt;
        transition: all ease 0.5s;
    }

    a p:hover {
        opacity: 0.6;
    }

    @keyframes breath {
        50% {
            margin-top: 70px;
        }
    }
`;
