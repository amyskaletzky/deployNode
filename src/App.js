import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://deploy-node-1.onrender.com/api')
      .then((res) => {
        console.log('res: ', res)
        res.json()
      })
      .then((data) => {
        console.log('data: ', data);
        setData(data.message)
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "loading..." : data}</p>
        <h1>eirugpeisurg</h1>
      </header>
    </div>
  );
}


export default App;
