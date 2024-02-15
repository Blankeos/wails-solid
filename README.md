<h1>Wails + Solid + TS + Tailwind Template</h1>

<h2>Table of Contents</h2>

- [🤔 About](#%F0%9F%A4%94-about)
- [👨‍💻 Live Development](#%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-live-development)
- [🔨 Building](#%F0%9F%94%A8-building)

## 🤔 About

This is the Wails Solid Template created by [Carlo](https://github.com/blankeos) for his Desktop application projects.
This is currently a work in progress.

**Technologies Used**:

- Wails (Go)
- SolidJS
- TailwindCSS
- Extra things for DevX:
  - prettier + prettier-plugin-tailwindcss
  - PNPM (If you wish to change, make sure to change `wails.json`)

## 👨‍💻 Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## 🔨 Building

To build a redistributable, production mode package, use `wails build`.
