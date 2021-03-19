import React from 'react';
import Nav from '../Nav/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const ProductDetails = () => {
    return <React.Fragment>
        <header>
            <Nav />
        </header>

        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Products</Breadcrumb.Item>
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
                        <h1>Product's Title</h1>
                        <hr/>
                        <p>
                            <b>Starting bid:</b> $50
                        </p>
                        <p>
                            <b>Current bid:</b> $50
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
                                Place bid
                            </Button>
                            </InputGroup>
                             <InputGroup className="mb-3">                                 
                               <Form.Check id="autoBid" type="checkbox" label="Auto-bid" />
                            </InputGroup>
                        </form>
                        <h5>Description</h5>
                        <hr/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
}

export default ProductDetails;