/* eslint-disable no-unused-vars */
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>
        <button type="button" onClick={() => setCount( count + 1 )}>
          Click me
        </button>
        {' '}
        Clicked {count} times

      </p>
    </div>
  )
}

export default App
