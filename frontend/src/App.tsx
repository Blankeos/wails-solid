import { createSignal } from "solid-js";
import { Greet } from "wailsjs/go/main/App";

import "./App.css";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import wailsLogo from "./assets/wails.png";

function App() {
  const [count, setCount] = createSignal(0);

  const [name, setName] = createSignal("");

  const [greetResult, setGreetResult] = createSignal("");

  function greet() {
    if (name() === "") return;

    Greet(name()).then((result) => setGreetResult(result));
  }

  return (
    <>
      <div class="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://wails.io/" target="_blank">
          <img src={wailsLogo} class="logo wails" alt="Wails logo" />
        </a>
      </div>
      <h1>Vite + Solid + Wails + Tailwind</h1>

      <div class="h-5" />
      <div>
        <div class="flex justify-center gap-x-2">
          <input
            name="name"
            placeholder="Name"
            class="rounded-md p-2"
            onInput={(e) => setName(e.target.value)}
          />
          <button onClick={greet}>Greet</button>
        </div>

        {greetResult()}
      </div>

      <div class="h-5" />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count()}
      </button>

      <div class="h-2" />
      <p class="text-gray-400">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
