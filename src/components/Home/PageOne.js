import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginModal from '../Modals/Login';

class PageOne extends React.Component {
  render() {
    return (
      <div>
        <Container>
          PAGE ONE
          <LoginModal {...this.props} />
        </Container>
      </div>
    );
  }
}

export default PageOne;
