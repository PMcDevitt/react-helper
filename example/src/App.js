import React from 'react'
import { useMyHook } from '@pmcdevitt/react-helper'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App