import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
export default class FakeLoader extends React.Component {
  componentDidMount() {
    this.props.showLoader();
    setTimeout(() => {
      this.props.hideLoader();
    }, 2000);
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: '300',
          width: '100%',
          height: '100vh',
          backgroundColor: '#fff',
          visibility: this.props.isLoading ? 'display' : 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
}
