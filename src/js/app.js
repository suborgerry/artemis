import '../css/app.sass';

import(/* webpackChunkName: "myModule", webpackPrefetch: true */ './dynamic_import').then(module => module.default());

console.log('Hello from app.js');