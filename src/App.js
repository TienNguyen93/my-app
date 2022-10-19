import './App.css';

function App() {
  const name = 'Jane Doe'
  const element = <h1>Hello {name}</h1>

  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  const user = {
    firstName: 'Mary',
    lastName: 'Popping'
  }

  const element2 = (
    <h3>
      format name, {formatName(user)}
    </h3>
  )

  return (
    <div className="App">
      <h1>hellow</h1>
      {element}
      {element2}
    </div>
  );
}

export default App;
