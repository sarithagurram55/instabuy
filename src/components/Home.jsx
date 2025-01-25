import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carou from '../assets/1.png';
import Carouone from '../assets/4.png';
import Caroutwo from '../assets/5.png';
import Companyone from '../assets/10.png';
import Companytwo from '../assets/11.png';
import Companythree from '../assets/12.png';
import Companyfour from '../assets/13.png';
import Companyfive from '../assets/14.png';
import Companysix from '../assets/15.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Home({user}){
    const navigate = useNavigate()
    const handleCTAClick = ()=>{
        if(user) {
            //navigate to products page
            navigate('/products')
        }else{
            navigate('/login')
        }
    }
    return(
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:'50px 50px 10px 110px'}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9' , fontWeight:700}}><i>STYLE</i></h2>
                                <div style={{marginBottom:20}}>
                                    <h4>shop from the latest trendy</h4>
                                    <h4>clothes to the best gadgets. With</h4>
                                    <h4>Star Shopper you save 10% every</h4>
                                    <h4>time you shop!</h4>
                                </div>
                                <Button onClick={handleCTAClick} >Browse Products</Button>
                                <h4>Products available from:</h4>
                                <div>
                                    <img src={Companyone} style={{height:40}}/>
                                    <img src={Companytwo} style={{height:40}}/>
                                    <img src={Companythree} style={{height:40}}/>
                                    <img src={Companyfour} style={{height:40}}/>
                                    <img src={Companyfive} style={{height:40}}/>
                                    <img src={Companysix} style={{height:40}}/>
                                </div>  
                            </div>
                        </Col>
                        <Col>
                         <img alt="" src={Carou} style={{height:'73vh',width:'100%'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:'50px 50px 10px 110px'}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9' , fontWeight:700}}><i>STYLE</i></h2>
                                <div style={{marginBottom:20}}>
                                    <h4>shop from the latest trendy</h4>
                                    <h4>clothes to the best gadgets. With</h4>
                                    <h4>Star Shopper you save 10% every</h4>
                                    <h4>time you shop!</h4>
                                </div>
                                <Button onClick={handleCTAClick}>Browse Products</Button>
                                <h4>Products available from:</h4>
                                <div>
                                    <img src={Companyone} style={{height:40}}/>
                                    <img src={Companytwo} style={{height:40}}/>
                                    <img src={Companythree} style={{height:40}}/>
                                    <img src={Companyfour} style={{height:40}}/>
                                    <img src={Companyfive} style={{height:40}}/>
                                    <img src={Companysix} style={{height:40}}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                         <img alt="" src={Carouone} style={{height:'73vh',width:'100%'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:'50px 50px 10px 110px'}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9' , fontWeight:700}}><i>STYLE</i></h2>
                                <div style={{marginBottom:20}}>
                                    <h4>shop from the latest trendy</h4>
                                    <h4>clothes to the best gadgets. With</h4>
                                    <h4>Star Shopper you save 10% every</h4>
                                    <h4>time you shop!</h4>
                                </div>
                                <Button onClick={handleCTAClick}>Browse Products</Button>
                                <h4>Products available from:</h4>
                                <div>
                                    <img src={Companyone} style={{height:40}}/>
                                    <img src={Companytwo} style={{height:40}}/>
                                    <img src={Companythree} style={{height:40}}/>
                                    <img src={Companyfour} style={{height:40}}/>
                                    <img src={Companyfive} style={{height:40}}/>
                                    <img src={Companysix} style={{height:40}}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                         <img alt="" src={Caroutwo} style={{height:'73vh',width:'100%'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}