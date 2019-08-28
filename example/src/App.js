import React from 'react'
import { TwilioLogo, useCounter, useDocumentTitle } from '@pmcdevitt/react-helper'

const App = () => {
  const [count, setCount] = useCounter(4)
  useDocumentTitle(count)
  return (
    <div>
      <TwilioLogo
        height='240px'
        width='520px'
        customStyles={{ border: '1px solid black' }}
      />
      <p>Currently, the count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  )
}

export default App
