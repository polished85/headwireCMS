
# Headwire CMS
A component based, website authoring interface built with ReactJS

## Get Started
### Open/Run the App
1. `git clone git@github.com:polished85/headwireCMS.git`
2. Open index.html found at `path/to/headwireCMS/public/`

### Development Environment
The development environment watches all files/folders in the source directory, and recompiles the app whenever a file is changed. The compiled app is found at `path/to/headwireCMS/public/js/app.js`

1. [Install NodeJS and NPM](https://nodejs.org/en/)
2. `npm install babel -g`
3. `npm install gulp -g`
4. `cd path/to/headwireCMS`
5. `npm install`
6. `npm start`

## Architecture
### State Object
A plain JavaScript object that represents the state of the app. Our state object looks like this:
```
{
	layout: {
    name: 'main',
    authoring: false,
    components: []
	},
	componentMenu: {
    isOpen: true, 
    drag_canvas: false, 
    left: 100,
    top: 10, 
    diff_left: 0,
    diff_top: 0  
	},
	componentSettings: {
    isOpen: false,
    activeComponent: 'none',
    activeComponentId: 0,
    activeComponentData: ''
	}
}
```
### Component Library
A collection of components that can be used during authoring.

### Component Engine
Takes the state object as an input. Cross references components defined in state object with components in the component library and renders them into the layout.

### Actions
Actions are functions that update the state object. This is the only way to update state.

### Component
Components are modular and make up the component library. Each component consists of the following:

##### component.js
A react component that represents the component to be rendered.

##### editor.js
A react component that knows how to update the component (from component.js). This is the component that appears in the *Component Settings* sidebar.

##### data.js
Each component has a data prop that holds all components data (text, classes, etc). Initial component data is defined using the React *defaultProps* method. Here is an example data prop for the h1 component.
```
{
	data: }
		text: 'Heading 1',
		class: 'h1'
	}
}
```
##### schema.js
A schema for the data property enforced using the React *propTypes* method. Data properties must be flat (1 level deep). Here is an example schema for the H1 component.
```
{
  data: React.PropTypes.shape({
    text: React.PropTypes.string,
    class: React.PropTypes.string
  })
}
```
##### index.js
Bundles the component, editor, schema, and data into a single object which can be imported by the Component Library.
```
export default {
	type: 'H1',
	component: Component,
	editor: Editor,
	drop_zone: true
}
```

## NPM Packages
### Babel
Transpile ES2015 and JSX to ES5.

* babel (6.3.26)
* babel-preset-es2015 (6.3.13)
* babel-preset-react (6.3.13)

### Browserify
Bundle CommonJS (nodeJS require syntax) and ES2015 import/export syntax to a single script.

* babelify (7.2.0)
* browserify (13.0.0)

### Gulp
Development Build tool&mdash;watch, concat, minify, recompile, etc&hellip;

* gulp (3.9.0)
* gulp-concat (2.6.0)
* gulp-less (3.0.5)
* gulp-minify-css (1.2.3)
* gulp-react (3.1.0)
* gulp-rename (1.2.2)
* gulp-uglify (1.5.1)
* gulp-util (3.0.7)
* vinyl-source-stream (1.1.0)

### React
* react (0.14.7)
* react-dom (0.14.7)
* react-redux (4.0.6)

### Redux
[Redux](http://redux.js.org/) is a state manager for react applications. It is the accepted implementation of [Flux Architecture](https://facebook.github.io/flux/) created by facebook. There are many implementations of Flux, but the React community has overwhelmingly embraced Redux, and Facebook went as far as hiring the author [Dan Abramov](https://github.com/gaearon).

* redux (3.0.6)
* redux-devtools (3.0.1)

### Utilities
* deep-freeze (0.0.1)
* immutable (3.7.6)
* lodash (4.5.0)
* prettyjson (1.1.3)
* shortid (2.2.4)
