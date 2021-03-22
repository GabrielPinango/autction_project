import React, {useEffect, useState} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ErrorPage500 from '../ErrorPage/ErrorPage500';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../Functions/fetchData';
import { calculateTimeLeft } from '../Functions/calculateTimeLeft';
import {readZip} from '../Functions/readZip';

const ProductDetails = () => {
    if(sessionStorage.getItem('user') == null) {
        window.location = "/"; 
    }

    const [expirationDate, setExpirationDate] = useState(new Date().toString());
    const { product_id } = useParams();
    const [isError, setIsError] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [bid, setBid] = useState(0);
    const [timeLeft, setTimeLeft] = useState(new Date());

    useEffect(() => {
        let data = fetchData(`http://127.0.0.1:8000/api/product/${product_id}`);
        data.then((product) => {
            setProduct(product[0]);
            const {expiration_date} = product[0];
            const imagesNames = product['imagesArr'];
            setExpirationDate(expiration_date);
            for(var i in imagesNames) {
                readZip(`http://127.0.0.1:8000/api/${product['images']}`, imagesNames[i]).then((response) => { 
                    const imagesArr = [response];
                    setisLoading(false);
                    setImages((oldImages) => {
                        return [...oldImages, imagesArr];
                    });
                });
            }
        })
        .catch((error) => setIsError(true));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(expirationDate));
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    });

    if(isError) {
        return <ErrorPage500 />
    } else if(isLoading) {
        return <div>
        <h1>Loading...</h1>
        </div>;
    } else {
        const {title, description} = product;
        const timerComponents = [];
        document.title = `Product`;
    
        Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[interval]) {
                return;
            }
            timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
            );
        });

        const placeBid = (e) => {
            e.preventDefault();
            const { id } = JSON.parse(sessionStorage.getItem('user'));
            let data = {
                user_id: id,
                product_id: product_id,
                bid: bid
            }
            let sync = fetchData(`http://127.0.0.1:8000/api/bid/save`, {
                method: 'PUT',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            });

            sync.then((response) => {
                console.log(response);
            })
            .catch((error) => setIsError(true))
        }
        
        return <>        
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/' style={{textDecoration:'none',color:'#000'}}>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/products' style={{textDecoration:'none',color:'#000'}}>Products</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <section>
                    <Container>
                        <Row>
                            <Col className="col-sm-12 col-md-6">
                                <Carousel>
                                    { images.map((image) => {
                                        return <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={image}
                                            alt={title}
                                            />
                                        </Carousel.Item>
                                    }) }
                                </Carousel>
                            </Col>
                            <Col className="col-sm-12 col-md-6">
                                <h1>{title}</h1>
                                <hr/>
                                <p>
                                    <b>Starting bid:</b> $50
                                </p>
                                <p>
                                    <b>Current bid:</b> $50
                                </p>
                                <p>
                                    <b>Time left:</b> {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                                </p>
                                <form action="">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Place bid"
                                            aria-label="Place bid"
                                            aria-describedby="basic-addon2"
                                            type="number" step="0.01"
                                            value={bid}
                                            onChange={(e) => setBid(e.target.value)}
                                        />
                                        <Button variant="primary" onClick={placeBid}>
                                            Bid now!
                                        </Button>
                                    </InputGroup>
                                    <InputGroup className="mb-3">                                 
                                    <Form.Check id="autoBid" type="checkbox" label="Auto-bid" />
                                    </InputGroup>
                                </form>
                                <h5>Description</h5>
                                <hr/>
                                <p>
                                    {description}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        </>
    }
}

export default ProductDetails;