import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47 + this.props.incr
    }
  }

  handleClick = () => {
    this.setState((prevState,prevProps) => {
      return {meaningOfLife:prevState.meaningOfLife + prevProps.incr}
    },
      () => console.log(this.state.meaningOfLife)
      )

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <h1>this is a test react</h1>
          <button onClick = {this.handleClick}>
            Click Me!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
