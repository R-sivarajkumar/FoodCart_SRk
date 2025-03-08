import { useEffect, useState } from 'react'
import './App.css'


function Middle() {

  const [quote, setQuote] = useState({})

  useEffect(function () {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.log(err))
  }, [])
  return (

    <>
      <section className="middle-content">
        <h1>Welcome to Our Website</h1>

        <p>
          {quote.quote}
        </p>
        <button>Learn More</button>
      </section>



    </>
  )
}

export default Middle