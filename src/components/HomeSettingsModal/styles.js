import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(10, 10, 10, 0.7);
    z-index: 1;

    section:first-child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35vw;
        height: 70vh;
        background-color: rgb(30, 30, 30);
        text-align: center;
        padding-top: 1px;
        border-radius: 5px;
        color: white;
        animation: 0.5s ease-out slideModal;
    }

    @keyframes slideModal {
        from {
            transform: translate(-50%, -100%)
        }
    }
    
    #close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        border-radius: 50%;
        transition: all ease 0.5s;
        padding: 3px;
    }
    
    #close:hover {
        transform: scale(1.15);
    }

    h1 {
        margin-top: 50px;
        font-weight: 500;
        font-size: 20pt;
    }

    h2 {
        font-size: 14pt;
        font-weight: 300;
    }

    section h2:not(:first-of-type) {
        margin-top: 30px;
    }

    section:not(:first-child) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 12% 0 12%;
    }

    span {
        font-size: 11pt;
    }

    span img {
        margin-left: 5px;
        transition: all ease 0.5s;
    }

    span img:hover {
        transform: scale(1.15);
    }

    section select {
        border: 1px solid #6544DB;
        border-radius: 3px;
        padding: 5px;
        color: white;
        background: rgb(20, 20, 20);
        outline: none;
        transition: all ease 0.5s;
    }

    section select:focus {
        border: 2px solid #6544DB;
    }

    section input[type="button"] {
        border: none;
        background: none;
        padding: 0;
        transition: all ease 0.5s;
    }

    section input[type="button"]:hover {
        transform: scale(1.2);
    }

    @media (max-width: 800px) {
        section:first-child {
            width: 100vw;
            height: 100vh;
        }

        img {
            width: 36px;
        }

        h1 {
            font-size: 22pt;
        }

        h2 {
            font-size: 18pt;
        }

        span {
            font-size: 13pt;
        }

        span img {
            opacity: 0;
        }

        input[type="button"], select {
            font-size: 13pt;
        }

        section h2:not(:first-of-type) {
            margin-top: 50px;
        }

        section:not(:first-child) {
            margin: 25px 12% 0 12%;
        }
    }
`;
