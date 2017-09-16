# Setup React Native project

1. Step up project folder

```
mkdir projectFolder
cd projectFolder
exp init projectname

cd projectname // run emulator, open code ide
exp start

```
2. Install package

```
yarn add react-navigation react-redux redux redux-thunk
yarn add -D redux-logger
yarn add -D flow-bin
yarn add -D eslint eslint-config-equimper prettier eslint-config-prettier
```

* edit .eslintrc

```
{
  "extends": [
    "equimper",
    "prettier"
  ],
  "globals": {
    "__DEV__": false
  }
}
```
* install redux dev tools to debug

```
yarn add -D redux-devtools-extension
```
* edit package.json

```
"scripts":{
  "debug": "open 'rndebugger://set-debugger-loc?host=localhost&port=19001'",
}
```

* run `yarn debug` then command+D

3. Create folder src

```
mkdir src
cd src
mddir reducers

touch store.js
touch navigations.js
touch reducers/index.js
touch reducers/navigation.js
```

4. setup Store
```
// @flow
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

export default createStore(rootReducer,
  undefined,
  applyMiddleware(...middlewares));
  ```

  5. setup src/reducers/index.js
  ```
  // @flow
import { combineReducers } from 'redux';

export default combineReducers({
  fake: () => []
});
```
5. setup /src/screens folder

