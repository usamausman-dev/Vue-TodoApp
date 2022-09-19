<template>
  <div class="container my-5">
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="box bg-white"></span> = Incomplete </span>
      <span> <span class="box bg-dark"></span> = Complete </span>
    </div>
    <div class="todos row">
      <button
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="onDblCLick(todo)"
        :class="todo.completed ? 'bg-dark text-white' : 'bg-white text-dark'"
        class="col-md-3 fw-bold mx-5 my-3 p-3 rounded shadow border-0"
      >
        {{ todo.title }}

        <i
          @click="deleteTodo(todo.id)"
          class="fa-solid fa-xmark float-end text-danger"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoItems",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblCLick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.box {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.bg-completed {
  background: red;
  color: blue;
}
</style>