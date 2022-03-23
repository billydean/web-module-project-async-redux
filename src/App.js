// import react, hooks
import React from 'react';
// import components, if any
// import style(s)
import './styles/App.css';
// import redux toosl, action-creators
import { connect } from 'react-redux';
import * as actionCreators from './state/action-creators';

function App() {
  return (
    <div className="App">
      Async Redux Project
    </div>
  );
}

const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps, actionCreators)(App);