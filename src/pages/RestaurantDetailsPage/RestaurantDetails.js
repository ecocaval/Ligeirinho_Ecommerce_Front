import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Section } from "../HomePage/HomeStyle";
import { NavBar } from "../HomePage/HomeStyle";
import { AiFillStar } from 'react-icons/ai';
import {BsHeartFill} from 'react-icons/bs';

export default function RestaurantDetails(props) {
    console.log(props)

    return (
        <>
            <Header></Header>
            <NavBar>
                    {/* <img src={props.restaurantchoosed.img}></img> */}
                    <h3 className="animated-text">{props.restaurantchoosed.name}</h3>
                    <div className="star"><p>4,5</p><AiFillStar className="svg"></AiFillStar></div>
                    <BsHeartFill className="heart"></BsHeartFill>

             
            </NavBar>
            <Section>teste</Section>
            <Footer></Footer>
        </>
    )
}