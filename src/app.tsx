import { useState } from 'hono/jsx'
import honoLogo from './assets/hono.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://hono.dev" target="_blank">
          <img src={honoLogo} class="logo hono" alt="Hono logo" />
        </a>
      </div>
      <h1>Vite + Hono</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Hono logos to learn more
      </p>
    </>
  )
}
