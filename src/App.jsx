import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <nav>
            <img src="../images/React-icon.svg.png" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Project 1</h4>
        </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Vite + React</h1>
      <p>If you got it aknowledge my work By clicking on count </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
       <div className="container">
         <header>
           <h2>Why react is cool?</h2>
         </header>
         <main>
           <ul className="main-points" >
             <li>Was first created in 2013</li>
             <li>Was originally created by Jordan Walker</li>
             <li>Has well over 100K stars on Github</li>
             <li>Is maintained by Facebook</li>
             {/* <li>Powers thousands of enterprise apps,including mobile apps</li> */}
           </ul>
         </main>
         <footer>
           <br></br>
           <small>Developed by  Scrimba+Me</small>
         </footer>
       </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
