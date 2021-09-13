function App() {
  function getNumber() {
    fetch("http://localhost:3332", { method: "GET" })
      .then((response) => response.text())
      .then((number) => console.log(number))
      .catch((error) => console.log(error));
  }

  function incNumber() {
    fetch("http://localhost:3332", { method: "POST" })
      .then((response) => response.text())
      .then((number) => console.log(number))
      .catch((error) => console.log(error));
  }
  //http://

  return (
    <div>
      <button onClick={getNumber}>Get Number</button>
      <button onClick={incNumber}>Increase Number</button>
    </div>
  );
}

export default App;
