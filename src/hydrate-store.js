/**
 * hydrate-store.js - async hydrate helper to synchronise data before the app will start
 * react-native-web-storage
 *
 * Created by Peter Kowalczyk on 07/01/17.
 * Copyright © 2017 Aurity. All rights reserved.
 *
 */
import storage from './storage/storage'

export default hydrateStore

function hydrateStore() {
  return storage
    .getAllFromLocalStorage()
    .then(hydrateInMemoryStorage)
    .catch(errorHandling)
}

function hydrateInMemoryStorage(localStorage) {
  Object
    .keys(localStorage)
    .forEach(key => storage.setItem(key, localStorage[key]))

  return localStorage
}

function errorHandling(error) {
  return `Get Token failed ${error}`
}
