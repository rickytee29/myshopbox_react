import React from 'react';
import { connect } from 'react-redux';
import PageTwo from '../components/PageTwo';

export const Container = (props) => {
  return <PageTwo {...props} />;
};

function mapStateToProps(state) {
  return {
    userCountryCode: state.userCountryCode,
    browserCountryCode: state.browserCountryCode,
    userData: state.userData,
  };
}

// function mapDispatchToProps(dispatch) {
//   return null;
// }

export default connect(mapStateToProps)(Container);
