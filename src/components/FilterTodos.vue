<template>
  <div class="container">
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01"
        >Filter Todos</label
      >
      <select
        class="form-select"
        id="inputGroupSelect01"
        @change="filterTodo($event)"
      >
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodo"]),
};
</script>

<style>
</style>