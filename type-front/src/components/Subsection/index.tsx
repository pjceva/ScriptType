import { Container } from "./styles";

type Subprops = {
    name: string;
    top_speed: number;
}

export const Subsection = (props: Subprops) =>{
    return(
        <Container>
            {props.name}
            <span>{props.top_speed}</span>
        </Container>
    )
}