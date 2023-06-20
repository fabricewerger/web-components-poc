# web-components-poc

This is a proof of concept project to outline the styling, scripting and tooling required for the use of web components.

## Installation

### 1. Install dependencies

Install: `npm install`

### 2. Lift off :rocket:

Serve: `npm serve`  
Serve (no hot reload): `npm serve-not-hot`  
To be added: ...

### Folder structure

- **build** | Configuration for the CI Pipeline (see the CI Pipeline chapter)
- **src** | The actual application (see the chapter 'App structure' for more information )
- **public** | Static assets which are copied to the root of the application when the app is build. It therefore contains things like the favicon, robots.txt, webmanifest etc.

## General Principles

### Built With

- [Webpack](https://webpack.js.org) - A framework build on top of react which allows for easy SSR

### Authors

- **Nathan Clare** [<n.clare@youweagency.com>]
- **Fabrice Werger** [<f.werger@youweagency.com>]
