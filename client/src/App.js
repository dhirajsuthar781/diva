import react, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({});
  useEffect((e) => {

    fetch("https://diva-backend.onrender.com").then(res => res.json()).then((e) => {
      setData(e);

    })
      .catch((er) => {
        console.log("error in api")
      })

  },[])
  return (
    <div className="App">
       
      {data.message}
    </div>
  );
}

export default App;
