<template>
  <app-header></app-header>
  <main class="main-content flex-column">
    <section class="all-news section">
      <h2 v-if="TITLE_NEWS.length !== 0">Последние новости</h2>
      <h2 v-else>Новостей нет</h2>
      <div class="title-news flex-row">
        <div v-if="TITLE_NEWS.length !== 0" class="big-title-news flex-column">
          <div
            class="image-news card-shadow"
            @click="routerPush(TITLE_NEWS.alt)"
          >
            <img :src="TITLE_NEWS.img" :alt="TITLE_NEWS.alt" />
            <div class="hidden-item">
              <div class="hidden-text">
                <img src="../assets/eye.png" alt="show eye" />
              </div>
            </div>
          </div>
          <h4>{{ TITLE_NEWS.name }}</h4>
          <p>{{ TITLE_NEWS.mini_description }}</p>
        </div>
        <!-- /.big-title-news -->
        <div
          v-for="second_news in SECOND_NEWS"
          :key="second_news.id"
          class="small-title-news flex-column"
        >
          <div
            class="image-news card-shadow"
            @click="routerPush(second_news.alt)"
          >
            <img :src="second_news.img" :alt="second_news.alt" />
            <div class="hidden-item">
              <div class="hidden-text">
                <img src="../assets/eye.png" alt="show eye" />
              </div>
            </div>
          </div>
          <h4>{{ second_news.name }}</h4>
          <p>{{ second_news.mini_description }}</p>
        </div>
        <!-- /.small-title-news -->
      </div>
      <!-- /.title-news flex-row -->

      <div class="other-news flex-row">
        <app-news-other-item
          v-for="other_news in OTHER_NEWS"
          :key="other_news.id"
          :id="other_news.alt"
          :title="other_news.name"
          :text="other_news.mini_description"
          :image="other_news.img"
        ></app-news-other-item>
      </div>
      <!-- /.other-news flex-row -->
    </section>
    <!-- /.section -->
  </main>
  <app-footer></app-footer>
</template>

<script>
import appHeader from "@/components/appHeader";
import appFooter from "@/components/appFooter";
import appNewsOtherItem from "@/components/appNewsOtherItem";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      TITLE_NEWS: "news/TITLE_NEWS",
      SECOND_NEWS: "news/SECOND_NEWS",
      OTHER_NEWS: "news/OTHER_NEWS",
    }),
  },
  methods: {
    ...mapActions({
      GET_NEWS: "news/GET_NEWS",
    }),
    routerPush(path) {
      window.scrollTo(0, 0);
      this.$router.push(`/news/${path}`);
    },
  },
  mounted() {
    this.GET_NEWS();
  },
  components: {
    appHeader,
    appFooter,
    appNewsOtherItem,
  },
  name: "appPageNews",
};
</script>

<style scoped>
.all-news h4 {
  margin: 1rem 0 0 0;
}
.title-news {
  padding: 0 0 1rem 0;
  justify-content: normal;
  align-items: flex-start;
  border-bottom: 1px solid #2fc1ff;
}
.big-title-news {
  width: 100%;
}
.small-title-news {
  margin-left: 2rem;
  width: 70%;
}
.image-news {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  height: 15rem;
}
.image-news img {
  width: 100%;
  max-width: 15rem;
}
.image-news:hover .hidden-item {
  opacity: 1;
}
.image-news:hover > img {
  -webkit-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
}
.other-news {
  justify-content: space-between;
  flex-wrap: wrap;
}
.hidden-item {
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  background: rgba(106, 106, 106, 0.8);
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transition: opacity 0.5s;
  opacity: 0;
}
.hidden-item img {
  width: auto;
  height: auto;
}
.hidden-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media (max-width: 980px) {
  .all-news h2 {
    margin: 1rem 0 0 0;
  }
  .small-title-news {
    margin: 0;
    width: 100%;
  }
  .other-news,
  .title-news {
    flex-direction: column;
  }
}
</style>
