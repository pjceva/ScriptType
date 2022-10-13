import { Background, Block, Counter, LanguageField, Navbar, TextBox } from "./styles"
import LoginIcon from "../../icons/Icon.Login.png"
import { ProgressBar } from "../../components/ProgressBar"

export const Main = () =>{
    return (
        <Background>
            <Block>
                <Navbar>
                    <h1>ScriptType</h1>
                    <img src={LoginIcon} />
                </Navbar>
                <LanguageField placeholder="Choose your programing language"/>
                <TextBox>
                    <span>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore 
                        eu fall
                    </span>
                </TextBox>
                <ProgressBar value={10} max={30}/>
                <Counter>10/30</Counter>
            </Block>
        </Background>
    )
}