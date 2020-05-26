import React from 'react';
import { connect } from 'react-redux';
import PageOne from '../components/PageOne';

export const Container = (props) => {
  return <PageOne {...props} />;
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
