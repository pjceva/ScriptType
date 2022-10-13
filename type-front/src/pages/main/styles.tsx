import styled from "styled-components";
import backimg from "../../imgs/background2.0.jpg"

export const Background = styled.section`
    background-image: url(${backimg});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const Block = styled.section`
    width: 65%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const Navbar = styled.section`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 1.7rem;
        color: #29E4B7
    }
    img{
        width: 3rem;
    }

`;

export const LanguageField = styled.input`
    width: 40%;
    height: 1.5em;
    background: #4A4545;
    border-radius: 3px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    color: #FFFFFF;
    padding-left: 7px;
    

`;

export const TextBox = styled.section`
    height: 10rem;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #29E4B7;
    /* border-style: solid;
    border-color: #29E4B7; */
    margin: auto 0;
    padding: 20px 30px;
    /* overflow: hidden; */
    span{
        font-family: 'Inter';
        font-style: normal;
        font-size: 1.8rem;
        color: rgba(255, 255, 255, 0.5);
        
    }
`;

export const Counter = styled.span`
    color: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-size: 2.3rem;
    margin-bottom: 30px;
    align-self: flex-end;
`
