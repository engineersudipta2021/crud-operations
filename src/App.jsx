



import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 
function App() {
    return (
        <div className="App">
            <Navbar bg="warning" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home">crud-operation</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      Signed in as: <a href="#login">Sudipta Dhawya</a>
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
      </Navbar>

            <h1 className="geeks">Project 1 </h1>
            <h3>CRUD App</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;
