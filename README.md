### mandalalabs

git clone :
https://github.com/rismanss/test.git

open terminal and instal all package

```
npm install
```

in file 'src/store.js' open comment if you have redux devtools

```js
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);
export default store;
```

```
npm start
```
