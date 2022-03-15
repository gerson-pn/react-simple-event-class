function App() {
  function verificaClique(e){
    e.preventDefault()
    console.log('Você clicou em: Clique aqui!');
  }
  return (
    <div>
      <button onClick={verificaClique}>Clique aqui!</button>
    </div>
  );
}
export default App;