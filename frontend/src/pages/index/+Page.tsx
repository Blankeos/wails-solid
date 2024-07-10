import { IconLogo } from '@/assets/icons/icons';
import WailsImage from '@/assets/icons/wails.png';

import { createSignal } from 'solid-js';

import { Greet } from 'wailsjs/go/main/App';
import { BrowserOpenURL } from 'wailsjs/runtime';

export default function Page() {
  const [greetMsg, setGreetMsg] = createSignal('');
  const [name, setName] = createSignal('');

  async function greet() {
    setGreetMsg(await Greet(name()));
  }

  return (
    <div class="flex flex-col items-center gap-y-5">
      <h1>Welcome to Wails!</h1>

      <div class="flex items-center justify-center gap-x-10">
        <a
          href="https://vitejs.dev"
          target="_blank"
          onClick={() => BrowserOpenURL('https://vitejs.dev')}
        >
          <img src="/vite.svg" class="logo vite h-16" alt="Vite logo" />
        </a>
        <a
          href="https://wails.io"
          target="_blank"
          onClick={() => BrowserOpenURL('https://wails.io')}
        >
          <img src={WailsImage} class="logo tauri h-16" alt="Wails logo" />
        </a>
        <a
          href="https://solidjs.com"
          target="_blank"
          class="logo solid"
          onClick={() => BrowserOpenURL('https://solidjs.com')}
        >
          <IconLogo height="4rem" />
        </a>
      </div>

      <p>Click on the Wails, Vite, and Solid logos to learn more.</p>

      <form
        class="flex gap-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          class="text rounded-lg border border-transparent bg-neutral-900 px-2 py-2 text-white shadow-md"
        />
        <button
          type="submit"
          class="text rounded-lg border border-transparent bg-neutral-900 px-2 py-2 text-white shadow-md hover:border-blue-500"
        >
          Greet
        </button>
      </form>
      <p>{greetMsg()}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count()}
    </button>
  );
}
