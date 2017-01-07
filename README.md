# react-native-web-storage
A synchronous local storage wrapper for both react-native(AsyncStorage) and browser(localStorage)

## Why?


## Install

	npm install react-native-web-storage --save

## Usage 

1. How to hydrate redux store with data from localStorage
```javascript
import { HydrateStore } from '@aurity/react-native-web-storage'

// NOTE: import your redux store!
function App({ store }) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default HydrateStore(store)(App)
```

2. How to work with storage

```javascript
import { storage } from '@aurity/react-native-web-storage'

storage.setItem(key, value)
storage.removeItem(key)
storage.getItem(key)
storage.store() // returns all storage 
storage.clear() // clears all storage 
storage.getAllFromLocalStorage() // reads data from platfrom specific localStorage 
storage.setToken(value) // sets oAuth token 
storage.getToken(value) // gets oAuth token
```

#### You are welcome to ask any question in the [issues](https://github.com/aurity/react-native-web-storage/issues) page.

#### TODO:
- [ ] missing "key" support (web localStorage API)
- [ ] missing "length" support (web localStorage API)
- [ ] missing tests (cross-platform problems)

### Changelog
#### 0.0.10 
