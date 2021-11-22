# SER 421 Boring Group Typescript Project

## Created by: Isaac Beale, Anthony Prentice, and Kai Chen

## Topic: Typescript


## Anatomy of the project

<ins>The tutorial, demo, and all other project requirements are contained within the website.</ins>

Within the `/src/` directory
   * `/src/public/` contains all of the static files
     * `src/public/images/` contains the images for the website
     * `src/public/js/` contains the Typescript sourcecode for the demo
   * `/src/views/` contains the pug templates. All of the writing portions of the project requirements can be found here.
   * `/src/index.ts` contains the Typescript code for the server

Inside the `/build/` directory contains the compiled Typescript code along with copies of the `/src/public/` and `/src/views/` directories.

## To Run the website locally

dependencies are listed in the package.json file. In order to install all dependencies, run `npm install` in the root directory.

If the build directory is present: To run the application, type `npm start` in the root directory.

If the build directory is not present for some reason: build the application using `npm run build` in the root directory before using `npm start` to run the application.

## Video link
https://www.youtube.com/watch?v=zXD2DTIbOeM