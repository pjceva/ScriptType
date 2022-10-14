import styled from "styled-components";
import backimg from "../../imgs/background2.0.jpg"

export const Background = styled.section`
    background-image: url(${backimg});
    background-size: cover;
    width: 100%;
    height: 100vh;
    
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
        font-size: 2.5rem;
        color: #29E4B7
    }
    img{
        width: 3rem;
    }

`;

export const LanguageField = styled.input`
    width: 40%;
    background: #4A4545;
    border-radius: 3px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-size: 1.2rem;
    color: #FFFFFF;
    padding: 1px 7px;
    
`;

export const Div = styled.div`
    height: 18rem;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    position: relative;
    p{
        color: #29E4B7;
        position: absolute;
        right: 0;
        font-size: 18px;
    }
`

export const TextBox = styled.section`
    height: 10rem;
    background: #333333;
    border-radius: 10px;
    border: 1px solid #29E4B7;
    /* margin: auto 0; */
    margin-top: 3rem;
    padding: 20px 30px;
    overflow: hidden;
    position: absolute;
    span{
        font-family: 'Inter';
        font-style: normal;
        font-size: 1.9rem;
        color: rgba(255, 255, 255, 0.5);
        
    }
`;

export const Counter = styled.span`
    font-size: 2.3rem;
    margin-bottom: 30px;
    color: #29E4B7;
    align-self: flex-end;

`
