import { Background, Block, Counter, LanguageField, Navbar, ProgressBar, TextBox } from "./styles"
import LoginIcon from "../../icons/Icon.Login.png"

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
                <ProgressBar />
                <Counter>3/30</Counter>
            </Block>
        </Background>
    )
}