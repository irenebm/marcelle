# Marcelle Education

> A [Marcelle](https://marcelle.dev) Application

## Setting up

To create a new project:

```sh
npm init marcelle marcelle-tutorial
cd marcelle-tutorial
npm install
```

Marcelle project structure:

```sh
.
├── README.md
├── index.html     # The main HTML page for your application
├── package.json
├── src
│   ├── index.js   # Main application script
│   └── components    # Directory containing local components bundled with your application
│       └── index.js
└── vite.config.js # Build tool configuration file
```

## Basics

Marcelle is a client-side JavaScript framework. All Marcelle applications run in the browser without the need for communication with a Web server. In its simplest form, a Marcelle application is a webpage defined by `index.html` and a script file `src/index.ts` (or `src/index.js` if you chose JavaScript as language when generating your app).

## Available Scripts

To see the application running, type the command:

```sh
npm run dev -- --open
```

Runs the app in the development mode.
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits.

```sh
npm run build
```

Builds a static copy of your site to the `dist/` folder.
Your app is ready to be deployed!

## Setting up a sketchpad

To create a new `sketchPad` component, add the following line to the script:

```sh
const input = marcelle.sketchPad();
```

## Showing the interface

To create a dashboard, the API provides a `dashboard()` function:

```sh
const myDashboard = marcelle.dashboard({
  title: 'My First Tutorial',
  author: 'Myself',
});
```

To visualise the created dashboard, we need to start it:

```sh
myDashboard.show();
```

To display a component on the dashboard, we first create a page and specify all the components displayed on this dashboard page with the `.sidebar()` and `.use()` functions:

* `sidebar()` adds components on the left column of the dashboard.
* `use()` function adds components on the main central column.

```sh
myDashboard.page('Data Management').sidebar(input);
```

## Managing the Backend

```sh
npm run backend
```
