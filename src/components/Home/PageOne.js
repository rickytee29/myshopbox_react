import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginModal from '../Modals/Login';
import { Home } from './Sections';
class PageOne extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <LoginModal {...this.props} />
          <Home />
        </Container>
      </div>
    );
  }
}

export default PageOne;
