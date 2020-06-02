import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const HomeCard = (props) => {
  return (
    <div className="col-md-3" style={{ marginTop: '2em' }}>
      <div className="homeCard grows">
        <div className="text-center">
          <span>
            <img src={props.imgSrc} alt="delivery" />
          </span>
        </div>
        <h4 className="text-center">{props.title}</h4>
        <p className="text-center">{props.body}</p>
        <Button variant="light">Learn More</Button>
      </div>
    </div>
  );
};

export const Home = () => {
  const carousel = {
    panel1: {
      imgBack: '',
      imgSide: 'img/1.svg',
      title: 'Shopbox makes your online shopping simple',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi hic nobis quo iusto numquam, reprehenderit dicta?',
      buttonText: ['Sign up for free', 'View our rates'],
    },
    panel2: {
      imgBack: '',
      imgSide: 'img/1.svg',
      title: 'Our couriers now accept credit card payments',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi hic nobis quo iusto numquam, reprehenderit dicta?',
      buttonText: ['Sign up for free', 'View our rates'],
    },
    panel3: {
      imgBack: '',
      imgSide: 'img/1.svg',
      title: 'Frequently Asked Questions',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi hic nobis quo iusto numquam, reprehenderit dicta?',
      buttonText: ['Sign up for free', 'View our rates'],
    },
  };
  return (
    <div id="home">
      <Container fluid style={{ padding: '0px' }}>
        <Row>
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6" id="c-caption">
                      <h3>{carousel.panel1.title}</h3>
                      <p>{carousel.panel1.body}</p>
                      <div id="buttonBar">
                        <Button variant="primary">Sign up for free</Button>
                        <Button variant="light" id="secondButton">
                          View our rates
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-6" id="c-image">
                      <img
                        className="d-block w-100"
                        src="/img/1.svg"
                        alt="First slide?"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6" id="c-caption">
                      <h3>{carousel.panel2.title}</h3>
                      <p>{carousel.panel2.body}</p>
                      <div id="buttonBar">
                        <Button variant="primary">Sign up for free</Button>
                        <Button variant="light" id="secondButton">
                          View our rates
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-6" id="c-image">
                      <img
                        className="d-block w-100"
                        src="img/2.svg"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6" id="c-caption">
                      <h3>{carousel.panel3.title}</h3>
                      <p>{carousel.panel3.body}</p>
                      <div id="buttonBar">
                        <Button variant="primary">Sign up for free</Button>
                        <Button variant="light" id="secondButton">
                          View our rates
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-6" id="c-image">
                      <img
                        className="d-block w-100"
                        src="img/3.svg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        <Row>
          <HomeCard
            imgSrc="/img/hc1.svg"
            title="On time delivery"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elitt enimad minim."
          ></HomeCard>
          <HomeCard
            imgSrc="/img/hc2.svg"
            title="Buy anywhere"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elitt enimad minim."
          ></HomeCard>
          <HomeCard
            imgSrc="/img/hc3.svg"
            title="Shop at anytime"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elitt enimad minim."
          ></HomeCard>
          <HomeCard
            imgSrc="/img/hc4.svg"
            title="Enjoy life"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elitt enimad minim."
          ></HomeCard>
        </Row>
      </Container>
    </div>
  );
};
