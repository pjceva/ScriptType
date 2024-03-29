import { Background, Block, Counter, Div, LanguageField, Navbar, TextBox } from "./styles"
import LoginIcon from "../../icons/Icon.Login.png"
import { ProgressBar } from "../../components/ProgressBar"
import { SideBar } from "../../components/SideBar"

export const Main = () =>{
    return (
        <Background>
            <SideBar />
            <Block>
                <Navbar>
                    <h1>ScriptType</h1>
                    <img src={LoginIcon} />
                </Navbar>
                <LanguageField placeholder="Choose your programing language"/>
                <Div>
                    <p>Top speed: 70wpm</p>
                <TextBox>
                    
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
                    
                </TextBox>
                </Div>
                
                <ProgressBar value={10} max={30}/>
                <Counter>10/30</Counter>
            </Block>
            
        </Background>
    )
}