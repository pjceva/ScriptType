import { Bar, Body, Container, Div, SubSection } from "./styles"

export const SideBar = () =>{
    return(
        <Container>
            
            <Div>
                <h1>Username</h1>
            </Div>
            <Body>
                <Bar>Amigos</Bar>
                <SubSection>
                    Jampas
                    <span>100wpm</span>
                </SubSection>
                <SubSection>Pze<span>100wpm</span></SubSection>
                <SubSection>Renato<span>100wpm</span></SubSection>
                <SubSection>Isabel<span>100wpm</span></SubSection>
                <SubSection>Stella<span>100wpm</span></SubSection>
                <Bar>Desafios</Bar>
            </Body>
        </Container>
    )
}