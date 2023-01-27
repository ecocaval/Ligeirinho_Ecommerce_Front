import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Home from "./pages/HomePage/Home";
import styled from "styled-components"
import RestaurantDetails from "./pages/RestaurantDetailsPage/RestaurantDetails";


function App() {

  const [habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [dadosusuario, setDadosUsuario] = React.useState()
  const [restaurantdata, setRestaurantData] = React.useState()

  const [restaurantchoosed, setRestaurantChoosed] = React.useState()
  return (
    <Container>

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

          <Route path="/home" element={<Home dadosusuario={dadosusuario}
            setDadosUsuario={setDadosUsuario} restaurantdata={restaurantdata} setRestaurantData={setRestaurantData} setRestaurantChoosed={setRestaurantChoosed} />} />
          <Route path="/restaurant" element={
            <RestaurantDetails restaurantchoosed={restaurantchoosed}/>} />

        </Routes>
      </BrowserRouter>

    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

export default App;

