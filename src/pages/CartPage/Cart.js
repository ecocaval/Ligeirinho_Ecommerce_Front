import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Container, StyleCheckout, StyledModal, StyleEmptyCart, StyleProduct, StyleRestaurant } from "./CartStyle.js";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement('#root');


export default function Cart(props) {

    const navigate = useNavigate()
    const [restaurantId, setRestaurantId] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const [openFinalizationModal, setOpemFinalizationModal] = useState(false)
    const config = {
        headers: {
            Authorization: props.dadosUsuario.token
        }
    }
    const total = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)
    useEffect(() => {
        getCart()
        if (cartItems.length > 0) {
            getRestaurant()
        }
        
    }, [cartItems])

    async function getCart() {

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/carts/${props.dadosUsuario.userId}`, config)
        setCartItems(response.data.products)
        setRestaurantId(response.data.products[0].restaurantId)

    }

    async function getRestaurant() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`, config)
        setRestaurant(response.data)
    }

    function backToRestaurants() {
        navigate("/home")
    }

    function finalizeOrder(){
        axios.delete(`${process.env.REACT_APP_API_URL}/carts/${props.dadosUsuario.userId}`, config)
        navigate("/home")
    }

    return (
        <Container>
            <Modal
                isOpen={cartItems.length === 0}
                onRequestClose={backToRestaurants}
                style={{
                    content: {
                        backgroundColor: "white",
                        width: "50%",
                        height: "20%",
                        position: "fixed",
                        top: "35%",
                        left: "25%",
                    }
                }}
            >
                <StyledModal>
                    <h2>Carrinho vazio!</h2>
                    <button onClick={backToRestaurants}>Voltar para os restaurantes</button>
                </StyledModal>
            </Modal>

            <Modal
                isOpen={openFinalizationModal}
                onRequestClose={finalizeOrder}
                style={{
                    content: {
                        backgroundColor: "white",
                        width: "50%",
                        height: "20%",
                        position: "fixed",
                        top: "35%",
                        left: "25%",
                    }
                }}
            >
                <StyledModal>
                    <h2>Pedido realizado com sucesso!</h2>
                    <button onClick={finalizeOrder}>Voltar para os restaurantes</button>
                </StyledModal>
            </Modal>
            <Header></Header>
            <>
                {cartItems.length > 0 ? (
                    <StyleProduct>
                        <img src={restaurant.smallImages} alt="" />
                        <div>
                            <h1>{restaurant.name}</h1>
                            <p>{restaurant.typeOfFood}</p>
                        </div>
                    </StyleProduct>
                ) : (
                    <StyleEmptyCart>
                        <p>Carrinho vazio</p>
                    </StyleEmptyCart>
                )}

                {cartItems.map((item) => {
                    return <StyleProduct>
                        <img src={item.bigImages} alt="" />
                        <div>
                            <h1>{item.description}</h1>
                            <p>{Number(item.quantity) * Number(item.price)}</p>
                        </div>
                    </StyleProduct>
                })}
                <StyleCheckout>
                    <div>
                        <h1>Total</h1>
                        <p>{total}</p>
                    </div>
                    <button onClick={() => setOpemFinalizationModal(true)}>Continuar</button>
                </StyleCheckout>
            </>
            <Footer></Footer>
        </Container>
    )
}