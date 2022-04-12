import styled from 'styled-components';

export const Container = styled.div`
    section {
        position: fixed;
        top: 0;
        right: -1.5vw;
        z-index: 1;
        background-color: blue;
        height: 0;
        width: 0;
        margin: 0 auto;
        transition: all ease 0.5s;
    }

    section:hover {
        right: 12vw;
    }

    section ul {
        display: inline-flex;
        list-style: none;
        justify-content: center;
        padding: none;
        width: 100%;
    }

    section ul li:first-child {
        padding: 6px 20px 1px 10px
    }

    section ul li {
        padding: 6px 10px 1px 10px;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    section ul li:not(:first-child):hover {
        transform: scale(1.35);
    }
`;

export const Hamburguer = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
`;

export const Menu = styled.div` 
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    section {
        position: fixed;
        animation: 0.5s forwards slide;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: rgb(10, 10, 10, 0.8);
    }

    img {
        position: absolute;
        top: 10px;
        right: 85%;
    }

    nav ul {
        list-style: none;
        padding: 0;
        text-align: right;
    }

    nav ul li:first-of-type {
        margin-top: 60px;
    }

    nav ul li {
        color: white;
        font-size: 16pt;
        margin-left: 60px;
        margin-top: 35px;
        width: 70%;
    }

    nav ul a {
        text-decoration: none;
        color: white;
    }

    @keyframes slide {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(25%);
        }
    }
`;
