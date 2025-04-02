import { useState } from 'react'

import './App.css'
import {SignIn,SignUp} from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignUp/>
      <SignIn/>
    </>
  )
}

export default App
