import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes"
import { GlobalStyle } from "./styles/global";


function App() {
  return(
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
    
  );

}
export default App
