# pwa-react-boilerplate

> Very simple version react application for Progressive Web App. Hope that it project can help many developers to understand that how to implement Progressive Web App with React.js

<p align="center">
<img src="https://cloud.githubusercontent.com/assets/124117/22330270/bb6b2728-e408-11e6-9488-d041b317e1e4.png" height="400px"/>
</p>

## Goals

- Build Modern Progressive Web App in strong background of performance
	- Web Manifest
	- Service Worker
	- Application Shell Architecture (with material-ui.com)
	- Supporting PRPL pattern
- Highlighted with cutting-edge technologies like React.js latest version, Webpack 2, Babel with ES2015 latest version and more latest concepts and tools

## Look and feel

By following material design and App shell design guide, We decide to mostly keep same design concept as [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit) via [material-ui](https://material-ui.com)

### Theme

You can change a primary color and accent color to customize theme at 'src/components/Theme.js' by updating theme configuration. for detail, visit to [Themes - Material-UI](https://goo.gl/jcKqML)

## Install

Currently, we use yarn mainly not npm but you can be allowed to use npm

```js
yarn install
```

### Run

Test with Webpack Dev Server and also you can test with server worker on the server if you set `true` to `webpackDevServerConfig.serviceWorker` in `scripts/config.js`

```
// dev server start without service worker
yarn start

// dev server start with service worker by enabling webpack's env flag
yarn start -- --env.sw
```

### Build

This application will be built taking advanges from [xo](https://github.com/sindresorhus/xo), eslint and [Webpack2](https://webpack.js.org/).

```
yarn run build
```
### Deploy to github

Deploy this app to github with prefix with `name` in package.json.

> You have to make sure that this app is running on secure options with https

```
yarn run gh
```

### Test

We are mainly using [ava](https://github.com/avajs/ava) and [enzyme](https://github.com/airbnb/enzyme) to test our React components. Please visit to each sites for understanding how to use it.

```
yarn test
```

## Project structure

```
.
├── build: build files, it will be created after build
├── public: public / static files
├── src: application source
├── package.json
├── readme.md
├── webpack.config.js
└── yarn.lock
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
