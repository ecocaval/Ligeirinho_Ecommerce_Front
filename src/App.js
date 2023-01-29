import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Home from "./pages/HomePage/Home";
import styled from "styled-components"
import RestaurantDetails from "./pages/RestaurantDetailsPage/RestaurantDetails";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {

  const [habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({ email: '', password: '' })
  const [dadosUsuario, setDadosUsuario] = React.useState(null)
  const [restaurantData, setRestaurantData] = React.useState()
  const [restaurantchoosed, setRestaurantChoosed] = React.useState()
  const [idproduct, setIdProduct] =  React.useState()
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
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario} />} />

          <Route path="/cadastro" element={
            <Cadastro
              habilitado={habilitado}
              setHabilitado={setHabilitado}
            />} />

          <Route path="/home" element={
            <Home
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario}
              restaurantData={restaurantData}
              setRestaurantData={setRestaurantData}
              setRestaurantChoosed={setRestaurantChoosed}
            />} />

          <Route path="/restaurant" element={
            <RestaurantDetails 
            restaurantchoosed={restaurantchoosed}
            setRestaurantChoosed={setRestaurantChoosed}
            setIdProduct={setIdProduct}
            dadosUsuario={dadosUsuario}
            />} />

          <Route path="/restaurant/product" element={
            <ProductPage
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario}
              idproduct={idproduct}
            />} />

        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

export default App;

