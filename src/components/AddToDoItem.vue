<template>
  <div class="add-to-do">
    <i class="fa fa-plus-circle"></i>
    <input
      type="text"
      id="input"
      placeholder="Add a to-do"
      v-model="toDo"
      @keyup.enter.prevent="onEnterPressed"
    />
  </div>
</template>

<script>
export default {
  name: "AddToDoItem",
  props: {
    toDoList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      toDo: null
    };
  },
  methods: {
    onEnterPressed() {
      if (this.toDo) {
        this.toDoList.push({
          name: this.toDo,
          done: false,
          trash: false
        });
        localStorage.setItem("TODO", JSON.stringify(this.toDoList));
      }
      this.toDo = null;
    }
  }
};
</script>
