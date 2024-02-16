import { useEffect, useState } from 'react'
import "./App.css"
import dice from "./assets/images/icon-dice.svg"
import patterD from "./assets/images/pattern-divider-desktop.svg"
import patterM from "./assets/images/pattern-divider-mobile.svg"
function App() {
  const [quote,setQuote] = useState("It is easy to sit up and take notice, what'sdifficult is getting up and  taking action.");
  const [count, setCount] = useState(117)
  function getQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then((res)=> {
      setQuote(res.slip.advice);
      setCount(res.slip.id);
    })
  }
  return (
    <div className='container'>
      <div className="card">
        <h3>Advice #{count}</h3>
        <p>&ldquo; {quote} &rdquo;
        </p>
        {/* {(window.innerWidth <= 500) ? <img src={patterM} alt="" /> : <img src={patterD} alt="" />} */}
        <img className='card-dektop-img' src={patterD} alt="" />
        <img className='card-mobile-img' src={patterM} alt="" />
        <div onClick={getQuote} className='img-btn'>
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
