<template>
  <div class="details-select-settings flex-column">
    <div
      v-for="item in settings"
      :key="item.id"
      class="details-select-settings-item"
    >
      <h4>{{ item.product_property.name }}</h4>
      <p>{{ item.name }}</p>
    </div>
  </div>
  <!-- /.details-select-settings -->
</template>

<script>
export default {
  props: {
    settings: {},
  },
  name: "appDetailsSelectSettings",
};
</script>

<style scoped>
.details-select-settings {
  margin: 2rem 1rem 0 1rem;
  max-height: 25rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.details-select-settings-item {
  width: 15rem;
}
.details-select-settings-item h4 {
  margin: 1rem 0;
}
@media (max-width: 980px) {
  .details-select-settings {
    flex-direction: column;
    margin: 1rem 0.5rem;
    height: auto;
    width: 100%;
  }
  .details-select-settings-item {
    width: 100%;
  }
  .details-select-settings-item h4 {
    font-weight: 600;
    font-size: 12px;
    margin: 0.5rem 0;
  }
  .details-select-settings-item p {
    margin: 0.5rem 0;
  }
}
</style>
