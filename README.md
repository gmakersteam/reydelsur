This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Creamos nuestro proyecto y dependencias

* `create-react-app demo-app` creamos el proyecto con nombre demo-app.
* `cd demo-app` ingresamos a nuestro proyecto.
* `yarn add react-router-dom` react router dom.
* `yarn add react-bootstrap` react-bootstrap.
* `yarn add redux-zero` redux-zero.


## Create gh-pages

1. The project was built assuming it is hosted at the server root.
To override this, specify the homepage in your *package.json*.
For example, add this to build it for GitHub Pages:

* `"homepage"` "http://myname.github.io/myapp". 

The build folder is ready to be deployed.
You may serve it with a static server:

* `yarn build` 
* `yarn add --dev gh-pages` 

Add the following script in your package.json.
```js
// ...
"scripts": {
// ...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
* `yarn run deploy` 
