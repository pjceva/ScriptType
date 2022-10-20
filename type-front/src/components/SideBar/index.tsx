import { Subsection } from "../Subsection"
import { Bar, Body, Container, Div } from "./styles"

export const SideBar = () =>{
    return(
        <Container>
            
            <Div>
                <h1>Username</h1>
            </Div>
            <Body>
                <Bar>Amigos</Bar>
                {/* <SubSection>
                    Jampas
                    <span>100wpm</span>
                </SubSection>
                <SubSection>Pze<span>100wpm</span></SubSection>
                <SubSection>Renato<span>100wpm</span></SubSection>
                <SubSection>Isabel<span>100wpm</span></SubSection>
                <SubSection>Stella<span>100wpm</span></SubSection> */}
                <Subsection name={"Jampas"} top_speed={100}/>
                <Subsection name={"Pze"} top_speed={50}/>
                <Subsection name={"Isabel"} top_speed={10}/>
                <Subsection name={"Renato"} top_speed={22}/>
                <Subsection name={"Stella"} top_speed={17}/>
                <Bar>Desafios</Bar>
            </Body>
        </Container>
    )
}