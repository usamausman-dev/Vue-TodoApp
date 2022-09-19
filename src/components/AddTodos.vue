<template>
  <div class="container mt-5">
    <h3>Add Todo</h3>
    <form @submit="onSubmit">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add Todo"
          v-model="title"
        />
        <input class="btn btn-dark" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodos",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style>
</style>