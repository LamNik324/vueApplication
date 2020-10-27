<template>
  <div id="app">
    <h1>Todo app</h1>
    <TodoList v-bind:todos="todos"
    @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Помыть обувь', completed: false },
        { id: 3, title: 'Убрать квартиру', completed: false },
      ],
    };
  },
  components: {
    TodoList,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
