/**
 * storage.js - wrapper to abstract localStorage implementation for web
 * react-native-web-storage
 *
 * Created by Peter Kowalczyk on 07/01/17.
 * Copyright © 2017 Aurity. All rights reserved.
 *
 */
const namespace = 'appStore'
initWithNamespace(namespace)

/*
 TODO:
 - missing "key" support
 - missing "length" support
 */
const storageService = {
  setItem,
  setToken,
  getToken,
  removeItem,
  getItem,
  store,
  clear,
  getAllFromLocalStorage,
}

export default storageService

function setItem(key, value) {
  const items = storageService.store()

  items[key] = value
  localStorage[namespace] = JSON.stringify(items)

  return storageService
}

function setToken(value) {
  return setItem('token', value)
}

function getToken(value) {
  return getItem('token', value)
}

function removeItem(key) {
  const items = storageService.store()
  delete items[key]
  localStorage[namespace] = JSON.stringify(items)

  return storageService
}

function getItem(key) {
  const items = storageService.store()

  return items[key]
}

function store() {
  return JSON.parse(localStorage[namespace])
}

function clear() {
  delete localStorage[namespace]
  initWithNamespace(namespace)

  return storageService
}

function initWithNamespace(nspace) {
  if (typeof localStorage !== 'undefined') {
    localStorage[nspace] = localStorage[nspace] ? localStorage[nspace] : '{}';
  }
}

function getAllFromLocalStorage() {
  return Promise.resolve(JSON.parse(localStorage[namespace]))
}
