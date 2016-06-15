# React web application blueprint with Webpack & TypeScript

This repo has a blueprint for building React web applications with Webpack using TypeScript. Using this repo you can quickly get started and extend it with more building blocks.

## Getting started

- Clone this repo
- If you don't have typings installed, run in the command line
```
$ npm i typings -g
$ typings install dt~react-dom --global --save
```
- In the command line run
```
$ npm i
```
- To start the web application run:
```
$ npm start
```
- In your web browser navigate to [http://localhost:8080](http://localhost:8080)
- Update the `index.tsx` content or the `styles.css` to see the app hot reload

## What's in this repo

- Bundling web application using webpack
- Webpack configuration for parsing React TypeScript
- Webpack configuration for bundling CSS files
- npm scripts for running webpack dev server (`$ npm start`) and building the release version of the application (`$ npm dist`)
- Bundle optimized for production
- Hot reloading enabled for webpack dev server
- Added SCSS/SASS support to blueprint
