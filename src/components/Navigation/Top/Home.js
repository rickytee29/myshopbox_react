import React, { Component } from 'react';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactCountryFlag from 'react-country-flag';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
//import FadeIn from 'react-fade-in';
//import { changeCountry, loginUser } from '../actions';
import Container from 'react-bootstrap/Container';
import WindowSizeListener from 'react-window-size-listener';
//import windowSize from 'react-window-size';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  logos = {
    SL: {
      url: '../img/logo_shopbox_desktop.png',
      w: 250,
      h: 50,
    },
    DM: {
      url: '../img/logo_dominica.png',
      w: 200,
      h: 75,
    },
    GD: {
      url: '../img/logo_grenada.png',
      w: 200,
      h: 75,
    },
    BB: {
      url: '../img/logo_barbados.png',
      w: 250,
      h: 60,
    },
  };
  state = {
    isLoading: true,
    logogSrc: '',
    isLogin: false,
    isRegister: false,
    logoSrc: '',
  };
  renderNavLinks() {
    if (this.state.screenWidth >= 768) {
      return (
        <Nav className="ml-auto justify-content-between">
          <Nav.Link active data-toggle="tab">
            Home
          </Nav.Link>
          <Nav.Link data-toggle="tab">Rates</Nav.Link>
          <Nav.Link data-toggle="tab">Services</Nav.Link>
          <Nav.Link data-toggle="tab">FAQ's</Nav.Link>

          <NavDropdown
            title="Country"
            id="collasible-nav-dropdown"
            className="mr-auto"
            style={{ alignSelf: 'flex-right' }}
          >
            <NavDropdown.Item eventKey="SL" onSelect={this.onCountrySelect}>
              <ReactCountryFlag
                countryCode="SL"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                  marginTop: '0em',
                  marginRight: '5px',
                }}
                aria-label={this.state.countryName}
                code="LC"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="LC"
              />
              St. Lucia
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="GD" onSelect={this.onCountrySelect}>
              <ReactCountryFlag
                countryCode="GD"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                  marginTop: '0em',
                  marginRight: '5px',
                }}
                aria-label={this.state.countryName}
                code="GD"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="GD"
              />
              Grenada
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="BB" onSelect={this.onCountrySelect}>
              <ReactCountryFlag
                countryCode="BB"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                  marginTop: '0em',
                  marginRight: '5px',
                }}
                aria-label={this.state.countryName}
                code="BB"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="BB"
              />
              Barbados
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item eventKey="DM" onSelect={this.onCountrySelect}>
              <ReactCountryFlag
                countryCode="DM"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                  marginTop: '0em',
                  marginRight: '5px',
                }}
                aria-label={this.state.countryName}
                code="DM"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="DM"
              />
              Dominica
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Button
              variant="primary"
              size="sm"
              onClick={
                this.props.userData ? this.onLogoutClick : this.onLoginClick
              }
            >
              {this.props.userData ? 'Logout' : 'Login'}
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button
              variant="secondary"
              size="sm"
              onClick={
                this.props.userData
                  ? this.props.history.push('/dashboard')
                  : this.onRegisterClick
              }
            >
              {this.props.userData ? 'Profile' : 'Sign up'}
            </Button>
          </Nav.Link>
          <Nav.Link>
            <ReactCountryFlag
              countryCode={this.props.userCountryCode}
              style={{
                fontSize: '2em',
                lineHeight: '2em',
                marginTop: '0em',
                marginLeft: '5px',
              }}
              aria-label={this.props.userCountryCode}
              code="US"
              svg
              cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
              cdnSuffix="svg"
              title={this.props.userCountryCode}
            />
          </Nav.Link>
        </Nav>
      );
    } else if (this.state.screenWidth >= 480) {
      return (
        <Row>
          <Col>
            <Nav.Link active data-toggle="tab">
              Home
            </Nav.Link>
            <Nav.Link data-toggle="tab">Rates</Nav.Link>
          </Col>
          <Col>
            <Nav.Link data-toggle="tab">Services</Nav.Link>
            <Nav.Link data-toggle="tab">FAQ's</Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={this.onLoginClick}>Login</Nav.Link>
            <Nav.Link onClick={this.onRegisterClick}>Sign up</Nav.Link>
          </Col>
          <Col>
            <NavDropdown title="Country" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="SL" onSelect={this.onCountrySelect}>
                <ReactCountryFlag
                  countryCode="SL"
                  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                    marginTop: '0em',
                    marginRight: '5px',
                  }}
                  aria-label={this.state.countryName}
                  code="LC"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="LC"
                />
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="GD" onSelect={this.onCountrySelect}>
                <ReactCountryFlag
                  countryCode="GD"
                  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                    marginTop: '0em',
                    marginRight: '5px',
                  }}
                  aria-label={this.state.countryName}
                  code="GD"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="GD"
                />
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="BB" onSelect={this.onCountrySelect}>
                <ReactCountryFlag
                  countryCode="BB"
                  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                    marginTop: '0em',
                    marginRight: '5px',
                  }}
                  aria-label={this.state.countryName}
                  code="BB"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="BB"
                />
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item eventKey="DM" onSelect={this.onCountrySelect}>
                <ReactCountryFlag
                  countryCode="DM"
                  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                    marginTop: '0em',
                    marginRight: '5px',
                  }}
                  aria-label={this.state.countryName}
                  code="DM"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="DM"
                />
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col>
            <Nav.Link active data-toggle="tab">
              Home
            </Nav.Link>
            <Nav.Link data-toggle="tab">Rates</Nav.Link>
          </Col>
          <Col>
            <Nav.Link data-toggle="tab">Services</Nav.Link>
            <Nav.Link data-toggle="tab">FAQ's</Nav.Link>
          </Col>
          <Col>
            <Nav.Link onClick={this.onLoginClick}>Login</Nav.Link>
            <Nav.Link onClick={this.onRegisterClick}>Sign up</Nav.Link>
          </Col>
        </Row>
      );
    }
  }
  onResize(width) {
    this.setState({ screenWidth: width });
  }
  //TODO REPLACE WITH ONSUBMIT FROM MODAL
  onLoginClick = () => {
    this.props.showLoginModal();
  };
  onLogoutClick = () => {
    this.props.logoutUser(this.state);
  };
  onCountrySelect = (e) => {
    //this.props.changeCountry('TT');
    this.props.showLoader();
    this.props.changeCountry(e);
    this.changeRoute(e);
    this.changeLogo(e);
  };
  changeLogo(code) {
    switch (code) {
      case 'BB':
        this.setState({ logoSrc: this.logos.BB });
        break;
      case 'GD':
        this.setState({ logoSrc: this.logos.GD });
        break;
      case 'DM':
        this.setState({ logoSrc: this.logos.DM });
        break;
      case 'SL':
        this.setState({ logoSrc: this.logos.SL });
        break;
      default:
        this.setState({ logoSrc: this.logos.SL });
        break;
    }
  }
  changeRoute(code) {
    switch (code) {
      case 'BB':
        this.props.history.push('/barbados');
        break;
      case 'GD':
        this.props.history.push('/grenada');
        break;
      case 'DM':
        this.props.history.push('/dominica');
        break;
      case 'SL':
        this.props.history.push('/st-lucia');
        break;
      default:
        this.props.history.push('/');
        break;
    }
  }
  renderCountryCode() {
    if (this.props.userCountryCode !== '') {
      return this.props.userCountryCode;
    } else {
      return this.props.browserCountryCode;
    }
  }
  componentDidMount() {
    this.setState({ ...this.state, ...this.props });
    this.changeRoute(this.props.userCountryCode);
    this.changeLogo(this.props.userCountryCode);
    this.renderNavLinks();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  render() {
    return (
      <Container fluid style={{ padding: '0px' }}>
        <WindowSizeListener
          onResize={(windowSize) => {
            this.onResize(windowSize.windowWidth);
          }}
        />
        <NavBar
          bg="light"
          expand="md"
          style={{
            minHeight: '75px',
          }}
        >
          <NavBar.Brand href="#">
            <img
              className="d-sm-flex"
              // src="https://via.placeholder.com/250x50"
              src={this.state.logoSrc.url}
              alt="My Shopbox"
              style={{
                width: this.state.logoSrc.w,
                height: this.state.logoSrc.h,
              }}
            ></img>
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse id="responsive-navbar-nav">
            {this.renderNavLinks()}
          </NavBar.Collapse>
        </NavBar>
      </Container>
    );
  }
}
