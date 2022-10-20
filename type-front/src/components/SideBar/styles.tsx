import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    width: 15%;
    /* background: rgba(217, 217, 217, 0.1); */
    background: rgba(41, 228, 183, 0.05);
    position: absolute;
    display: flex;
    flex-direction: column;

`

export const Div = styled.div`
    margin: 0 auto;
    padding: 25px 0;
    
    h1{
        font-size: 1.7rem;
        color: white;
        
    }
`
export const Body = styled.section`
    
`

export const Bar = styled.section`
    /* background: rgba(41, 228, 183, 0.15); */
    background: rgba(41, 228, 183, 0.35);
    padding: 15px 5px;
    font-size: 1.4rem;

`

export const SubSection = styled.section`
    width: 80%;
    margin: 10px auto;
    border-bottom: 2px solid white;
    font-size: 1.4rem;
    padding: 3px 10px;
    display: flex;
    justify-content: space-between;
    color: white;
    span{
        font-size: 1rem;
    }
    
`
