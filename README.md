# Starter module for NextJS Web App

The purpose of this repository is to provide the base for your NextJS application. Now, you dont have to think about the project structure, eslint or babel config; you can just cone this repository and build on the top of it!

## Structure

The project structure is pretty easy to understand:

```
/pages/ - folder that includes all your pages and its path
/pages/api/ - folder with your APIs
/server/ - script to start the node app; you can also deploy serverless
/src/ - includes componenets, styles, and modules, that you can use within your app
.babelrc - Babel config file
.env - environment variables
.eslintrc.js - Eslint config file
.gitignore
next.config.js - Next config file
```

## Build

You can configure the scripts in `package.json` and use either `npm` or `yarn` to build and work with the app.

### Local development
```
npm install
npm start
```

### Production build
```
npm install
npm run build
npm run serve
```

By default the app runs on port 3100 (you can change that in the server script) or specify the port as a variable:
`PORT=3000 npm start`

## Other configuration

Eslint configuration can be changed in `.eslintrc.js`; by default the rules are not too strict and checking for PropsTypes is disabled. 
