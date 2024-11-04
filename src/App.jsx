import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-6xl">
        Click on the Vite and React logos to learn more
      </p>
     <button className='btn bg-slate-600 rounded-xl'>HI</button>
    </>
  )
}

export default App
