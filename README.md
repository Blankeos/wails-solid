# README

## About

This is the Wails Solid Template created by [Carlo](https://github.com/blankeos).

**Technologies Used**:

- Wails (Go)
- SolidJS
- TailwindCSS

Added these for DevX:

- prettier + prettier-plugin-tailwindcss
- PNPM (If you wish to change, make sure to change `wails.json`)

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
