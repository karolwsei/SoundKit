import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './containers/app'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Permanent Marker', 'Karla']
  }
});

ReactDOM.render( <App />, document.getElementById('root'));