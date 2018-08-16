import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";
// pull in actions from action/index
import { fetchPeeps } from "./../actions/index";

class App extends Component {
  componentDidMount() {
    this.props.fetchPeeps();
    // call our action
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    chars: state.chars,
    fetchingPeeps: state.fetchingPeeps
  };
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapDispatchToProps,
  { fetchPeeps }
  /* actions go here */
)(App);
