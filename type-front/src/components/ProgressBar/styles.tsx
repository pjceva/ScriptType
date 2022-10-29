import styled from "styled-components";

export const Bar = styled.progress`
    width: 100%;
    height: 0.5rem;
    -webkit-appearance: none;
    appearance: none;
    ::-webkit-progress-value {
        border-radius: 7px;
        background-color: #29E4B7;
    }
    ::-webkit-progress-bar {
        border-radius: 7px;
        
    }
    
`;
