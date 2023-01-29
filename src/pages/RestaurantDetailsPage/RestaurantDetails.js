import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Section } from "../HomePage/HomeStyle";
import { NavBar } from "../HomePage/HomeStyle";
import { AiFillStar } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { Banner, Category, Product, SectionProduct, Image, Description, Price } from "./RestauranteDetailsStyled";
import { Products } from "./RestauranteDetailsStyled";

export default function RestaurantDetails(props) {
    // console.log(props)

    return (
        <>
            <Header></Header>
            <NavBar>
                {/* <img src={props.restaurantchoosed.img}></img> */}
                <h3 className="animated-text">{props.restaurantchoosed.name}</h3>
                <div className="star"><p>4,5</p><AiFillStar className="svg"></AiFillStar></div>
                <BsHeartFill className="heart"></BsHeartFill>
            </NavBar>
            <Section>

                <Banner>
                    <img src={props.restaurantchoosed.img}></img>
                </Banner>
                <SectionProduct>
                    <Category>BURGUERS</Category>
                <Products>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    
                </Products>
                </SectionProduct>
                <SectionProduct>
                    <Category>SORVETES</Category>
                <Products>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>Sundae</Description>
                        <Price>R$ 11,99</Price>
                    </Product>
                    
                    
                </Products>
                </SectionProduct>
                <SectionProduct>
                    <Category>BURGUERS</Category>
                <Products>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    <Product>
                        <Image src={props.restaurantchoosed.img}></Image>
                        <Description>BIG MAC</Description>
                        <Price>R$ 12,99</Price>
                    </Product>
                    
                </Products>
                </SectionProduct>


            </Section>
            <Footer></Footer>
        </>
    )
}

