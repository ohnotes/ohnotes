import styled from 'styled-components';

export const Standard = styled.div`
    position: absolute;
    top: 15px;
    left: 10px;

    img {
        display: inline;
        cursor: pointer;
        transition: all ease 0.5s;
        padding: 0 8px;
    }
    
    img:hover {
        transform: scale(1.15);
    }
`;

export const Hamburguer = styled.div`
    position: fixed;
    top: 15px;
    left: 10px;
`;

export const Menu = styled.div` 
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    section {
        position: fixed;
        animation: 0.5s forwards slide;
        top: 0;
        left: 0;
        width: 80vw;
        height: 100vh;
        background-color: rgb(10, 10, 10, 0.8);
    }

    img {
        position: absolute;
        top: 10px;
        left: 85%;
    }

    nav ul {
        list-style: none;
        padding: 0;
        text-align: left;
    }

    nav ul li:first-of-type {
        margin-top: 60px;
    }

    nav ul li {
        color: white;
        font-size: 16pt;
        margin-left: 20px;
        margin-top: 35px;
        border-bottom: 2px solid #6544DB;
        padding: 0 0 10px 15px;
        width: 70%;
    }

    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);
        }
    }
`;
