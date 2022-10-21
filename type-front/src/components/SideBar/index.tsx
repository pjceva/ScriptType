import { Subsection } from "../Subsection"
import { Bar, Container, Div, ScrollContainer } from "./styles"

export const SideBar = () =>{
    return(
        <Container>
            
            <Div>
                <h1>Username</h1>
            </Div>
            
                <Bar>Amigos</Bar>
                <ScrollContainer>
                    <Subsection name={"Jampas"} top_speed={100}/>
                    <Subsection name={"Pze"} top_speed={50}/>
                    <Subsection name={"Isabel"} top_speed={10}/>
                    <Subsection name={"Renato"} top_speed={22}/>
                    <Subsection name={"Stella"} top_speed={17}/>
                    <Subsection name={"Jampas"} top_speed={100}/>
                    <Subsection name={"Pze"} top_speed={50}/>
                    <Subsection name={"Isabel"} top_speed={10}/>
                    <Subsection name={"Renato"} top_speed={22}/>
                    <Subsection name={"Stella"} top_speed={17}/>
                </ScrollContainer>
                

                <Bar>Desafios</Bar>
            
        </Container>
    )
}