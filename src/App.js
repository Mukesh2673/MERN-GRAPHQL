import "./App.css";
import PublicFile from "./components/publicFile";
import Details from "./components/publicFile/Details";
import Login from "./components/Login";
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/file" element={<PublicFile />} />
        <Route exact path="/details" element={<Details/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/" element={<Login/>}/>

      </Routes>
    </Router>
  );
}

export default App;
