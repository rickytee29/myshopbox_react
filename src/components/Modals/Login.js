import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCog, faLock } from '@fortawesome/free-solid-svg-icons';

class LoginModal extends React.Component {
  state = {
    acct_number: '100',
    pass: 'V2KbeGYB2!4',
  };

  handleAcctChange = (event) => {
    this.setState({ acct_number: event.target.value });
  };
  handlePassChange = (event) => {
    this.setState({ pass: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(event, this.state.acct_number, this.password);
    setTimeout(() => {
      if (this.props.userData) {
        this.props.history.push('/dashboard');
      } else {
        this.props.hideLoader();
      }
    }, 2000);
  };

  componentDidMount() {
    this.setState({ ...this.state, ...this.props });
  }
  renderHelper() {
    return (
      <>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.isLoggingIn}
          onHide={() => this.props.hideLoginModal()}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: `#007bff`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '95%',
                height: '75%',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                borderRadius: '1.5rem',
                backgroundColor: 'white',
                boxShadow: '1px 2px 3px 0 rgba(0,0,0,.2)',
              }}
            >
              <Row
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '75px',
                    height: '75px',
                    borderRadius: '50px',
                    backgroundColor: 'white',
                    boxShadow: '1px 2px 3px 0 rgba(0,0,0,.2)',
                  }}
                >
                  <div style={{}}>
                    <FontAwesomeIcon icon={faUser} size="2x" color="#007bff" />
                  </div>
                </div>
              </Row>
              <Row
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  marginTop: '1rem',
                }}
              >
                <h4>Login</h4>
                <div align="center">
                  Don't have an account?<br></br> Sign up <a href="*">here</a>
                </div>
                <hr></hr>
              </Row>
              <Row
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        paddingTop: '20px',
                        paddingLeft: '10px',
                      }}
                    >
                      <span className="symbol-input100">
                        <FontAwesomeIcon
                          icon={faUserCog}
                          size="lg"
                          color="grey"
                        />
                      </span>
                    </div>
                    <div>
                      <input
                        style={{
                          padding: '0 309x 0 60px',
                          color: '#637282',
                          fontSize: '15px',
                          textAlign: 'center',
                          height: '50px',
                          background: '#f5f5f5',
                          minWidth: '250px',
                          borderRadius: '.5rem',

                          marginTop: '10px',
                          border: 'none',
                        }}
                        className="input100"
                        type="text"
                        name="acct_number"
                        id="acct_number"
                        placeholder="Account Number"
                        value={this.state.acct_number}
                        onChange={this.handleAcctChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        paddingTop: '20px',
                        paddingLeft: '10px',
                      }}
                    >
                      <span className="symbol-input100">
                        <FontAwesomeIcon icon={faLock} size="lg" color="grey" />
                      </span>
                    </div>
                    <div>
                      <input
                        style={{
                          padding: '0 309x 0 60px',
                          color: '#637282',
                          fontSize: '15px',
                          textAlign: 'center',
                          height: '50px',
                          background: '#f5f5f5',
                          minWidth: '250px',
                          borderRadius: '.5rem',

                          marginTop: '10px',
                          border: 'none',
                        }}
                        className="input100"
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.pass}
                        onChange={this.handlePassChange}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: '.5rem',
                    }}
                  >
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember Me
                      </label>
                    </div>
                    <div className="forgotPassword">
                      <label className="pull-right">
                        <a href="forgot_password.html">Forgotten Password?</a>
                      </label>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              Login to your account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  render() {
    return (
      <div>
        <Container>{this.renderHelper()}</Container>
      </div>
    );
  }
}

export default LoginModal;
