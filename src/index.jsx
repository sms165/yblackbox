import  ReactDOM  from "react-dom";
import Test from "./Test";
import Nav from "./components/nav/Nav";
import Cube from "./components/cube/Cube";


const App = () =>{
    return (
        <>
        
        <Nav />
        
       {/* <Cube /> */}

        </>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));