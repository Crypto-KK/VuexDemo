import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_SELECTED, RECEIVE_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL] (state, {check}) {
    // eslint-disable-next-line no-return-assign
    state.todos.forEach(todo => todo.complete = check)
  },
  [DELETE_SELECTED] (state) {
    // 清除已经完成的todo
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  }
}
