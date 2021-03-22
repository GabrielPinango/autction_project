import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';
import { fetchData } from '../Functions/fetchData';
import ErrorPage500 from '../ErrorPage/ErrorPage500';

const ProductListing = () => {
    if(sessionStorage.getItem('user') == null) {
        window.location = "/"; 
    }

    const { page } = useParams();
    let items = [];
    const [isLoading, setisLoading] = useState(true);
    const [isError, setIsError] = useState();
    const [products, setProducts] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [totalPages, setTotalPages] = useState('');
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        document.title = `Products`;
        let data = fetchData(`http://127.0.0.1:8000/api/products/` + page);
        data.then((products) => {
            setProducts(products.data);
            setisLoading(false);
            setNextPage(products.current_page + 1);
            setTotalPages(products.last_page);
            setActivePage(products.current_page);
            setPrevPage(products.current_page - 1);
        })
        .catch((error) => setIsError(true))
    }, [])

    

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item href={`/products/${number}`} key={number} active={activePage === number}>
                {number}
            </Pagination.Item>,
        );
    }

    if(isLoading) {
        return <div>
        <h1>Loading...</h1>
        </div>;
    } else if(isError) {
        return <ErrorPage500 />
    } else {
        return (
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
                
                <Container>
                    <section style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'}}>
                        { products.map((product) => {
                            const {id, title, description} = product;
                            return <Card style={{ width: '18rem', marginBottom: '1rem' }} key={id}>
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>{title}</Link> <br/>
                                        <small className='text-secondary'>Starting Price: $50</small>
                                    </Card.Title>
                                    <Card.Text>
                                        {description && description.substring(0, 150) + '...'}
                                    </Card.Text>
                                <Link to={`/product/${id}`} className="btn btn-primary">Learn More</Link>
                                </Card.Body>
                            </Card>
                        }) }
                    </section>
                    
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev href={prevPage > 0 ? '/products/' + prevPage : '/products/1'} />
                        {items}
                        <Pagination.Next href={'/products/' + nextPage} />
                        <Pagination.Last />
                    </Pagination>
                </Container>
            </React.Fragment>
        );
    }
}

export default ProductListing;