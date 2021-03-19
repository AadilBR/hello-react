import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click me</button>
    </>
  )
}

export default App;
