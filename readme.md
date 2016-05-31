# React web application with webpack with TypeScript blueprint

This repo contains a blueprint for building React web applications with webpack using TypeScript. Using this repo you can quickly get started and extend it with additional building blocks.

## Getting started

- clone this repo
- if you don't have typings installed, run in the command line
```
$ npm i typings -g
$ typings install dt~react --global --save
$ typings install dt~react-dom --global --save
```
- in the command line run
```
$ npm i
```
- to start the web application run:
```
$ npm start
```
- in your web browser navigate to `http://localhost:8080`

## What's in this repo

- bundling web application using webpack
- webpack configuration for parsing React TypeScript
- webpack configuration for bundling CSS files
- npm scripts for running webpack dev server (`$ npm start`) and building the release version of the application (`$ npm dist`)
- bundle optimized for production
