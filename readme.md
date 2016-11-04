# bare-react-pwa

> Very simple version react application for Progressive Web App. Hope that it project can help many developers to understand that how to implement Progressive Web App with React.js

## WARNING

This project is still in the incubation and not optimized fully yet. And many of features and codes could be significantly changed.

## Goals

- Build Modern Progressive Web App in strong background of performance
	- Web Manifest
	- Service Worker
	- Application Shell Architecture (with React MDL)
	- Supporting PRPL pattern
- Highlighted with cutting-edge technologies like React.js latest version, Webpack 2, Babel with ES2015 latest version and more latest concepts and tools

## Look and feel

By following material design and App shell design guide, We decide to mostly keep same design concept as [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) via [react-mdl](https://react-mdl.github.io)

## Install

Currently, we use yarn mainly not npm but you can be allowed to use npm

```js
yarn install
```

### Run

Test with Webpack Dev Server and also you can test with server worker on the server if you set `true` to `webpackDevServerConfig.serviceWorker` in `scripts/config.js`

```
yarn start
```

### Build

```
yarn run build
```

## Project structure

```
.
├── build: build files, it will be created after build
├── public: public / static files
├── scripts: config / build / start script
├── src: application source
├── package.json
├── readme.md
└── yarn.lock
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
