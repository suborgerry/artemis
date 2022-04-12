import '../styles/app.sass';

import './jquery-3.6.0.min'
import './owl.carousel.min'
import './owl.carousel.custom'

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then(module => module.default());

console.log('Hello from app.js');