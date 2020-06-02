import React from 'react';
import { connect } from 'react-redux';
import FakeLoader from '../components/FakeLoader';
import PageTwo from '../components/Dashboard/PageTwo';
import DashNav from '../components/Navigation/Top/Dash';
import {
  changeCountry,
  fetchCountry,
  loginUser,
  logoutUser,
  changeLogo,
  showLoginModal,
  hideLoginModal,
  showRegisterModal,
  hideRegisterModal,
  showLoader,
  hideLoader,
} from '../actions';

export const Container = (props) => {
  return (
    <>
      <FakeLoader {...props} />
      <DashNav {...props} />
      <PageTwo {...props} />
    </>
  );
};

function mapStateToProps(state) {
  return {
    userCountryCode: state.userCountryCode,
    browserCountryCode: state.browserCountryCode,
    userData: state.userData,
    isLoggingIn: state.isLoggingIn,
    isReggingIn: state.isReggingIn,
    isLoading: state.isLoading,
    logoSrc: state.logoSrc,
  };
}

// function mapDispatchToProps(dispatch) {
//   return null;
// }

export default connect(mapStateToProps, {
  changeCountry,
  changeLogo,
  fetchCountry,
  loginUser,
  logoutUser,
  showLoginModal,
  hideLoginModal,
  showRegisterModal,
  hideRegisterModal,
  showLoader,
  hideLoader,
})(Container);
