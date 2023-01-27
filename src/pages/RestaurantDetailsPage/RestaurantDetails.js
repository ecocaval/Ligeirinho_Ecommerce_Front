import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Section } from "../HomePage/HomeStyle";
import { NavBar } from "../HomePage/HomeStyle";


export default function RestaurantDetails(props) {
    console.log(props)

    return (
        <>
            <Header></Header>
            <NavBar>
                    {/* <img src={props.restaurantchoosed.img}></img> */}
                    <h3 className="animated-text">{props.restaurantchoosed.name}</h3>

             
            </NavBar>
            <Section>teste</Section>
            <Footer></Footer>
        </>
    )
}