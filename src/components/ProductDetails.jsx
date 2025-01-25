import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Col, Row, Button,Card} from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails({cartItems,handleAddToCart}) {
    const location = useLocation();
    const navigate = useNavigate();
    const {title, price, images,description, category,id} = location.state;

    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(() =>{
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limlt=20&offset=0`);
            console.log(response.data);
            setOtherProducts(response.data);
        }
        getData();
    },[])

    return(
        <div style={{padding: 50}}>
            <Row>
                <Col lg={2}>
                <div>
                    {images.map((image, index)=>{
                        return(
                            <img key={index} src={image} width={150} style={{marginBottom:20, borderRadius:8}} />
                        )
                    })}
                </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <img src={images[0]} width={350} style={{marginBottom:20, borderRadius:8}}/>
                        <h3>{title}</h3>
                        <h3 style={{color:'#216ad9'}}>${price}</h3>
                        <div>{description}</div>
                        <Button style={{marginTop: 30}} onClick={()=>{
                            if(id in cartItems) {
                                const currentItem = cartItems[id];
                                handleAddToCart({[id]:{title, price, quantity: currentItem.quantity+1}})
                            }else{
                                handleAddToCart({[id]:{title, price, quantity:1}})
                            }
                           // navigate('/cart');
                        }}>Add to Cart</Button>
                    </div>
                </Col>
                <Col>
                <div>
                    <div>
                        <h2>other products in same category</h2>
                    </div>
                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                    {otherProducts.map((product)=>{
                        if(product.id == id) return
                        return (
                            <Card key={product.id} style={{width:'8rem', border: 'none', margin:20}} > 
                                <Card.Img src={product.images[0]}/>
                                <Card.Title>{product.title.split(" ")[0]}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button onClick={()=> navigate(`/product/${product.id}`,{state:product} )} style={{width: 120}}>View item</Button>
                            </Card>
                        )
                    })}
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    )
}