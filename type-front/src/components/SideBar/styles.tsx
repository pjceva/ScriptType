import styled from "styled-components";

export const Container = styled.section`
    width: 17.5%;
    height: 100vh;
    position: absolute;
    display: flex;

    
    /* background: black; */
    .nav-menu {
    left: -100%;
    position: relative;
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
    
    .show{
        align-self: center;
        position: absolute;
        transition: 450ms;
        
    }

    .hide{
        align-self: center;
        transform: rotate(180deg);
        transition: 450ms;
        
    }
    button{
        border: none;
        background: none;
        cursor: pointer;
        
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
    /* :hover{
        background-color: rgba(41, 228, 183, 0.35);
    } */

`
