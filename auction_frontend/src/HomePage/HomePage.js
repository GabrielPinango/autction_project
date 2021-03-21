import React, {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  
  useEffect(() => {
     document.title = `Home Page`
  }, [])

  return (
    <React.Fragment>
      <header>
        <section>
          <h1 style={{textAlign: 'center'}}>Auction Site</h1>
        </section>
      </header>
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.edology.com/media/2167/download/blog-accounting-finance_how-does-the-global-economy-work.jpg?v=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sign up today!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </React.Fragment>
  );
}

export default Home;