<template>
  <div class="header">
    <div class="clear" @click="onClear">
      <i class="fa fa-refresh"></i>
    </div>
    <div id="date">{{ getDate }}</div>
  </div>
</template>

<script>
const options = { weekday: "long", month: "short", day: "numeric" };

export default {
  name: "Header",
  data() {
    return {
      date: null
    };
  },
  computed: {
    getDate() {
      const today = new Date();
      return today.toLocaleDateString("en-US", options);
    }
  },
  methods: {
    onClear() {
      localStorage.clear();
      location.reload();
    }
  }
};
</script>
