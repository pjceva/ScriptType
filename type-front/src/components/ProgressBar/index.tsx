import { Bar } from "./styles";

type ProgressProps = {
    value: number;
    max: number;
}

// export const ProgressBar = (props: ProgressProps) =>{

//     return (
//         <progress value={props.value} max={props.max} />
//     )

// };

export const ProgressBar = (props: ProgressProps) =>{
    return (
        <Bar value={props.value} max={props.max}/>
    )
}