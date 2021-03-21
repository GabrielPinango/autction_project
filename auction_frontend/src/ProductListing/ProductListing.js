import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';
const url = 'http://127.0.0.1:8000/api/products';

const ProductListing = () => {
    const productDescription =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`;
    let active = 2;
    let items = [];
    const [isLoading, setisLoading] = useState(true);
    const [isError, setIsError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299) {
                return resp.json();
            } else {
                setIsError(true);
            }
        })
        .then((products) => {
            setProducts([...products,products]);
            setisLoading(false);
        })
        .catch((error) => console.log(error))
    }, [])

    if(isLoading) {
        return <div>
        <h1>Loading...</h1>
        </div>;
    }

    if(isError) {
        return <div>
        <h1>An error has ocurred</h1>
        </div>;
    }

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item href="#" key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <React.Fragment>
            <header>
                <Nav />
            </header>

            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Products</Breadcrumb.Item>
            </Breadcrumb>
            
             <Container>
                <section style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'}}>
                    { products.map((product) => {
                        const {name} = product;
                        return <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                            <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" />
                            <Card.Body>
                                <Card.Title>
                                    {name} <br/>
                                    <small className='text-secondary'>Starting Price: $50</small>
                                </Card.Title>
                                <Card.Text>
                                    {productDescription.substring(0, 150) + '...'}
                                </Card.Text>
                                <Button variant="primary">View details</Button>
                            </Card.Body>
                        </Card>
                    }) }
                </section>
                
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
        </React.Fragment>
    );
}

export default ProductListing;