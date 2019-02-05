import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/planets/3/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }
  render() {
    let text = this.state.loading ? "loading..." : this.state.character.name;
    return <div>{text}</div>;
  }
}
export default App;
