<template>
  <div class="modal-background">
    <div @click="$emit('close')" class="close-background"></div>
    <div class="modal-window card-shadow flex-column">
      <div @click="$emit('close')" class="close">
        <img
          class="close-desktop"
          src="../assets/close-image.png"
          alt="close"
        />
        <img
          class="close-mobile"
          src="../assets/close-mobile-menu.png"
          alt="close"
        />
      </div>
      <h2 class="title">{{ title }}</h2>
      <div class="flex-row about-partner">
        <img class="partner-logo" :src="image" :alt="alt" />
        <p>{{ text }}</p>
      </div>

      <section v-if="machines">
        <h2>Машины приобретенные данным клиентом</h2>
        <div class="slider-content card-shadow">
          <carousel :breakpoints="breakpoints">
            <slide v-for="slide in 3" :key="slide">
              <app-machines-item
                title="Б-420"
                image="content_image.png"
              ></app-machines-item>
            </slide>
            <template #addons="{ slidesCount }">
              <navigation v-if="slidesCount > 2" />
              <pagination v-if="slidesCount > 2" />
            </template>
          </carousel>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import appMachinesItem from "@/components/appMachinesItem";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default {
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1.5,
          snapAlign: "center",
          wrapAround: true,
        },
        1248: {
          itemsToShow: 1.5,
          snapAlign: "center",
          mouseDrag: false,
          touchDrag: false,
          wrapAround: true,
        },
      },
    };
  },
  props: {
    title: String,
    text: String,
    image: String,
    alt: String,
    machines: Boolean,
  },
  components: {
    appMachinesItem,
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  name: "appModalPartnersItem",
};
</script>

<style scoped>
h2 {
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.title {
  align-self: center;
  text-align: center;
  margin-bottom: 2rem;
}
.about-partner {
  justify-content: space-between;
}
.partner-logo {
  align-self: center;
  max-width: 10rem;
  margin: 0 2rem 0 0;
}
@media (max-width: 980px) {
  .modal-window {
    max-height: 90%;
    height: auto;
  }
  h2 {
    text-shadow: none;
  }
  .about-partner {
    flex-direction: column;
  }
  .partner-logo {
    margin: 0 0 1rem 0;
  }
}
</style>
