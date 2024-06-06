import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-700 text-black p-4">
      <h1 className="text-2xl font-bold">Hola, Tailwind!</h1>
      <p>Tu configuración está completas.</p>
    </div>
  );
}

export default App
