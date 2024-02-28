import React, { useState } from 'react';
import logo from './logo.svg';
import { Button } from '@material-tailwind/react';
import './App.css';

function App() {
  const [rick, setRick] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <>
        {rick ? 
          <>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=XI5y_7rAHhLo0aXo&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </>:
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </>}
        </>
        <Button
          placeholder={"Button"}
          ripple={false}
          color="indigo"
          onClick={()=> setRick(!rick)}
        >
          Free candy
        </Button>
      </header>
      
    </div>
  );
}

export default App;
