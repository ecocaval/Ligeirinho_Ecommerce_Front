import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Home from "./pages/HomePage/Home";

function App() {

  const [habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [dadosusuario, setDadosUsuario] = React.useState()

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <Login
            habilitado={habilitado}
            setHabilitado={setHabilitado}
            login={login}
            setLogin={setLogin}
            dadosusuario={dadosusuario}
            setDadosUsuario={setDadosUsuario} />} />

        <Route path="/cadastro" element={
          <Cadastro
            habilitado={habilitado}
            setHabilitado={setHabilitado}
          />} />

        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

