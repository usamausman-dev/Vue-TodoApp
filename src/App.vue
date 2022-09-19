<template >
  <div class="text-white">
    <AddTodos />
    <FilterTodos />
    <TodoItems />
  </div>
</template>

<script>
import { TodoItems, AddTodos, FilterTodos } from "./components";
export default {
  name: "App",
  components: {
    TodoItems,
    AddTodos,
    FilterTodos,
  },
};
</script>

<style>
body {
  background-color: rgb(54, 54, 54);
}
</style>
