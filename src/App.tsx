import { Component } from "react";

class App extends Component {

  verificarClique = (e) => {
    console.log(e)
    console.log('Você clicou em: Clique aqui!')
  }

  render() {
    return (
      <div>
        <button onClick={this.verificarClique}>Clique aqui!</button>
      </div>
    );
  }
}

export default App;

