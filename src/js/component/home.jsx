import React from 'react';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <div className="col-md-3">
                        <Card title="Card 1" text="Description for card 1" link="#"/>
                    </div>
                    <div className="col-md-3">
                        <Card title="Card 2" text="Description for card 2" link="#"/>
                    </div>
                    <div className="col-md-3">
                        <Card title="Card 3" text="Description for card 3" link="#"/>
                    </div>
                    <div className="col-md-3">
                        <Card title="Card 4" text="Description for card 4" link="#"/>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Home;
