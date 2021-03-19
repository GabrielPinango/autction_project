import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <section>Auction Site</section>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
      <section>
        <h1 style={{textAlign: 'center'}}>Auction Site</h1>
      </section>
    </React.Fragment>
  );
}

export default App;
