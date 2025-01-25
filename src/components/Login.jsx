import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Log from '../assets/2.png';

export default function Login({setUser}){
    const [email, setEmail] = useState(' ');
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor:'blue', color:'white'}}>
            <Row style={{padding:'75'}}> 
                <Col style={{padding:100}}>
                <div>
                    <h1>InstaBuy!</h1>
                    <div>
                        <h6>One place where brands come <br/>together form all across the<br/>world</h6>
                    </div>
                    <div>
                    <Form>
                        <div style={{width:'70%', display:'flex', justifyContent:'space-between'}}> 
                            <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" onChange={(e)=> setEmail(e.currentTarget.value)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </div>
                        <Button onClick={()=>{
                            localStorage.setItem('userEmail', email);
                            setUser(email);
                            navigate('/');
                        }} type="submit" style={{width:'70%', marginBottom:26,border:'1', backgroundColor:'blue',borderColor:'white', color:'white'}} >
                            Start Shopping
                        </Button>
                        <div style={{color:'white'}}>
                            <h6>JOin the Club   <a onClick={()=> navigate('/signup')} style={{color:'white'}}>Click here</a></h6>
                        </div>
                        </Form>
                    </div>
                </div>
                </Col>
                <Col><img src={Log}  style={{height:'90vh'}}/></Col>
            </Row>
        </div>

    )
}