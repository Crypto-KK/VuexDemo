<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) of todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
import {mapState} from 'vuex'
import storageUtil from '../util/storageUtil'
export default {
  computed: {
    ...mapState(['todos'])
  },
  watch: {
    todos: {
      deep: true,
      handler: storageUtil.saveTodos
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
