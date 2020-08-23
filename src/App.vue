<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <List :toDoList="toDoList"></List>
      <AddToDoItem :toDoList="toDoList"></AddToDoItem>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import AddToDoItem from "./components/AddToDoItem";

export default {
  name: "App",
  components: {
    Header,
    List,
    AddToDoItem
  },
  data() {
    const data = localStorage.getItem("TODO");
    return {
      toDoList: data ? JSON.parse(data) : []
    };
  }
};
</script>
