import React from "react";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function ProductGallery(){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        async function getProducts() {
            try{
                const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        getProducts();
    }, [])
    return (
        <div style={{padding: 50}}>
            <h3>Select a product</h3>
            <div style={{display:'flex', flexWrap: 'wrap'}} >
                {products.map((product)=>{
                    return (
                        <Card key={product.id} style={{width:'21.5rem', border: 'none', margin:20}} > 
                            <Card.Img src={product.images[0]}/>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            <Button onClick={()=> navigate(`/product/${product.id}`,{state:product} )} style={{width: 120}}>View item</Button>
                        </Card>
                    )
                })}
            </div>
            {/* console.log(); */}
        </div>
    )
}