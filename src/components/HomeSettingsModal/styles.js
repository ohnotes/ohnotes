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
        background-color: rgb(24, 24, 24);
        text-align: center;
        padding-top: 1px;
        border-radius: 5px;
        color: white;
        animation: 0.5s ease-in-out slideModal;
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
        transition: all ease 0.5s;
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
        font-size: 17pt;
        font-weight: 400;
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
        font-size: 12pt;
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
        font-size: 12pt;
    }

    section select:focus {
        border: 2px solid #6544DB;
    }

    section input[type="button"] {
        border: none;
        background: none;
        border-radius: 5px;
        transition: all ease 0.5s;
        font-size: 12pt;
        color: white;
    }

    section input[type="button"]:hover {
        transform: scale(1.1);
        opacity: 0.5;
    }

    @media (max-width: 800px) {
        section:first-child {
            width: 100%;
            height: 100%;
        }

        h1 {
            font-size: 24pt;
            margin-top: 80px;
        }

        h2 {
            font-size: 19pt;
        }

        #close {
            width: 40px;
        }

        span {
            font-size: 15pt;
        }

        span img {
            opacity: 0;
        }

        section input[type="button"], section select {
            font-size: 14pt;
        }

        section input[type="button"] {
            padding: 10px 20px;
        }

        section h2:not(:first-of-type) {
            margin-top: 50px;
        }

        section:not(:first-child) {
            margin: 25px 12% 0 12%;
        }
    }
`;
