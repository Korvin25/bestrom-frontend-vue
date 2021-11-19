<template>
  <div class="block-content flex-row">
    <div class="about-content flex-column">
      <h3>{{ title }}</h3>
      <p class="text-about-content">{{ text.split("/")[0] }}</p>
      <button @click="routerPush(text.split('/')[1])" class="btn">
        ПОДРОБНЕЕ
      </button>
    </div>
    <img
      v-if="image.length > 0"
      class="content-image"
      :src="'http://bexram.online:8001' + image[0].file"
      :alt="image[0].alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    text: String,
    image: {},
  },
  methods: {
    routerPush(path) {
      this.$router.push(`/${path}`);
      window.scrollTo(0, 0);
    },
  },
  name: "appMainSliderContent",
};
</script>

<style scoped>
.block-content {
  cursor: auto;
  align-items: center;
}
.content-image {
  width: 100%;
  max-width: 20rem;
}
.text-about-content {
  padding: 1rem 0;
  text-align: left;
}
@media (max-width: 1248px) {
  .block-content button,
  .content-image {
    display: none;
  }
  .about-content {
    text-align: left;
    margin: 1rem;
    width: 100%;
  }
}
</style>
