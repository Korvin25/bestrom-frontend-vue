<template>
  <div class="machine-item flex-column">
    <h3>{{ title }}</h3>
    <img :src="require(`../assets/${image}`)" alt="logo" />
    <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
  </div>
</template>

<script>
import appHiddenItem from "@/components/appHiddenItem"

export default {
  props: {
    title: String,
    image: String,
  },
  components: {
    appHiddenItem,
  },
  name: "appMachinesItem",
}
</script>

<style scoped>
.machine-item {
  flex-grow: 1;
  height: 15rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
.machine-item h3 {
  align-self: auto;
}
.machine-item:hover .hidden-item {
  opacity: 1;
}
.machine-item:hover > h3,
.machine-item:hover > img {
  transition: all 0.4s;
  -webkit-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
}
.machine-item img {
  margin-top: 1rem;
  max-width: 20rem;
  max-height: 10rem;
}

@media (max-width: 980px) {
  .machine-item {
    width: 100%;
    height: 15rem;
    margin: 0.5rem;
  }
}
</style>
