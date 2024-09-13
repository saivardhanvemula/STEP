import "./App.css";
import { HomePage } from "./components/HomePage";
import LogIn from "./components/LogIn";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="page">
            {/* <Navbar/> */}
            <HomePage/>
            {/* <LogIn/> */}
        </div>
    );
}

export default App;
