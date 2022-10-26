import styled from "styled-components";

export const Container = styled.section`
    width: 15%;
    position: absolute;

    .nav-menu {
    left: -100%;
    position: absolute;
    transition: 350ms;
    }

    .nav-menu.active {
        height: 100vh;
        width: 100%;
        background: rgba(41, 228, 183, 0.05);
        display: flex;
        flex-direction: column;
        left: 0;
        transition: 350ms;
    }
    button{
        position: absolute;
    }
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
        background: rgba(255, 255, 255, 0.35);
        border-radius: 10px;
    }

`

export const Bar = styled.section`
    /* background: rgba(41, 228, 183, 0.15); */
    background: rgba(41, 228, 183, 0.35);
    padding: 15px 5px;
    font-size: 1.4rem;
    :hover{
        background-color: rgba(41, 228, 183, 0.35);
    }

`
