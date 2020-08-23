<template>
  <div class="content">
    <ul id="list">
      <li class="item" v-for="(toDoItem, index) in toDoList" :key="index">
        <i
          :class="
            toDoItem.done ? 'fa fa-check-circle co' : 'fa fa-circle-thin co'
          "
          @click="completeToDoItem(toDoItem)"
        ></i>
        <p :class="toDoItem.done ? 'text lineThrough' : 'text'">
          {{ toDoItem.name }}
        </p>
        <i
          class="fa fa-trash-o de"
          @click="deleteToDoItem(toDoItem, index)"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    toDoList: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log("mounted", this.toDoList);
  },
  methods: {
    completeToDoItem(toDoItem) {
      toDoItem.done = !toDoItem.done;
      localStorage.setItem("TODO", JSON.stringify(this.toDoList));
    },
    deleteToDoItem(toDoItem, index) {
      console.log("deleteToDoItem", toDoItem, index);
      this.toDoList.splice(index, 1);
      localStorage.setItem("TODO", JSON.stringify(this.toDoList));
    }
  }
};
</script>
