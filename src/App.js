import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./paginas/auth/login";
import Registro from "./paginas/auth/registro";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
