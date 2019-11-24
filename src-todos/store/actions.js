import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_SELECTED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL, {check})
  },
  deleteSelected ({commit}) {
    commit(DELETE_SELECTED)
  },
  readTodos ({commit}) {
    setTimeout(() => {
      const todos = storageUtil.readTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  }
}
