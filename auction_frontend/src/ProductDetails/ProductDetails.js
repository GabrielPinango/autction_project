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

const ProductDetails = () => {
    if(sessionStorage.getItem('user') == null) {
        window.location = "/"; 
    }

    const [expirationDate, setExpirationDate] = useState(new Date().toString());
    const { id } = useParams();
    const [isError, setIsError] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [timeLeft, setTimeLeft] = useState(new Date());

    useEffect(() => {
        let data = fetchData(`http://127.0.0.1:8000/api/product/${id}`);
        data.then((product) => {
            setProduct(product);
            const {expiration_date} = product;
            setExpirationDate(expiration_date);
            setisLoading(false);
        })
        .catch((error) => setIsError(true));
    }, [id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(expirationDate));
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    });
    
    if(isLoading) {
        return <div>
        <h1>Loading...</h1>
        </div>;
    } else if(isError) {
        return <ErrorPage500 />
    } else {
        const {title, description} = product;
        document.title = `Product`;

        const timerComponents = [];

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
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
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
                                    />
                                    <Button variant="primary" type="submit">
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