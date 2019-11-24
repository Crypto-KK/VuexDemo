/*
local
* */
const key = 'todos'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(key, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  }
}
