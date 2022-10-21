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
export const ScrollContainer = styled.section`
    height: 24vh;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: #FFFFFF;
        border-radius: 10px;
    }

`

export const Bar = styled.section`
    /* background: rgba(41, 228, 183, 0.15); */
    background: rgba(41, 228, 183, 0.35);
    padding: 15px 5px;
    font-size: 1.4rem;

`
