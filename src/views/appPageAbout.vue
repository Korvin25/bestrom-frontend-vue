<template>
  <app-header></app-header>
  <main class="main-content flex-column" v-if="PAGE_ID.length > 0">
    <section
      v-if="PAGE_ID[0].blocks.find((e) => e.name === 'history')"
      class="section"
    >
      <h2>О компании</h2>
      <div class="content flex-row card-shadow">
        <div
          @click="this.$router.push('/about/history')"
          class="about-content fex-column"
        >
          <h3>
            {{
              PAGE_ID[0].blocks.find((e) => e.name === "history").contents[0]
                .name
            }}
          </h3>
          <p class="text-about-content">
            {{
              PAGE_ID[0].blocks.find((e) => e.name === "history").contents[0]
                .text
            }}
          </p>
          <button
            @click="this.$router.push('/about/history')"
            class="content-btn btn"
          >
            ПОДРОБНЕЕ
          </button>
        </div>
        <div class="image-content">
          <a class="video flex-column card-shadow" href="http://youtube.com">
            <div class="video-title flex-row">
              <img
                alt="bestrom logo"
                class="logo"
                src="../assets/bestrom_logo.png"
              />
              <h1>БЕСТРОМ</h1>
            </div>
            <div class="video-play flex-column">
              <img alt="video play button" src="../assets/video-play.png" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <section class="history-development-mobile section">
      <h2>История развития</h2>
      <div class="card-shadow">
        <carousel :items-to-show="4.5" :wrap-around="true">
          <slide :key="item.year" v-for="item in HISTORY">
            <p class="carousel__item">{{ item.year }}</p>
          </slide>
          <template #addons="{ currentSlide }">
            <div class="history-description">
              <img
                :alt="findHistory(currentSlide + 1).description"
                :src="findHistory(currentSlide + 1).img"
              />
              <h3>{{ findHistory(currentSlide + 1).description }}</h3>
            </div>
          </template>
        </carousel>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'reasons')"
      class="section"
    >
      <h2>Почему выбирают нас</h2>

      <div class="content flex-row card-shadow">
        <div class="about-content flex-column">
          <h3>
            {{
              this.PAGE_ID[0].blocks.find((e) => e.name === "reasons")
                .contents[0].name
            }}
          </h3>
          <p class="text-about-content" style="padding: 1rem 0">
            {{
              this.PAGE_ID[0].blocks.find((e) => e.name === "reasons")
                .contents[0].text.split("/")[0]
            }}
          </p>
          <button @click="routerPush(this.PAGE_ID[0].blocks.find((e) => e.name === 'reasons').contents[0].text.split('/')[1])" class="content-btn btn">ПОДРОБНЕЕ</button>
        </div>
        <div class="image-content">
          <img
            :alt="
              this.PAGE_ID[0].blocks.find((e) => e.name === 'reasons')
                .contents[0].file[0].alt
            "
            class="image-world"
            :src="
              'http://bexram.online:8001' +
              this.PAGE_ID[0].blocks.find((e) => e.name === 'reasons')
                .contents[0].file[0].file
            "
          />
        </div>
      </div>

      <div
        v-if="
          this.PAGE_ID[0].blocks
            .find((e) => e.name === 'reasons')
            .contents.find((e) => e.name === 'choice')
        "
        class="our-choice flex-column"
      >
        <div class="reasons flex-row">
          <div
            v-for="item in this.PAGE_ID[0].blocks
              .find((e) => e.name === 'reasons')
              .contents.find((e) => e.name === 'choice').file"
            :key="item.id"
            class="item-reason card-shadow"
          >
            <img
              :alt="item.alt"
              :src="'http://bexram.online:8001' + item.file"
            />
            <app-hidden-item :text="item.alt"></app-hidden-item>
          </div>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'directors')"
      class="directors-desktop section"
    >
      <h2>Руководство БЕСТРОМ</h2>
      <div class="directors flex-row">
        <div
          v-for="item in this.PAGE_ID[0].blocks.find(
            (e) => e.name === 'directors'
          ).contents"
          :key="item.id"
          class="director-item flex-column"
        >
          <img
            :alt="item.file[0].alt"
            :src="'http://bexram.online:8001' + item.file[0].file"
          />
          <h5>{{ item.name }}</h5>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'we-create')"
      class="section"
    >
      <h2>Мы производим и реализуем</h2>

      <carousel
        :autoplay="4000"
        :items-to-show="1.5"
        :wrap-around="true"
        class="our-choice-mobile"
      >
        <slide
          :key="slide.id"
          v-for="slide in this.PAGE_ID[0].blocks.find(
            (e) => e.name === 'we-create'
          ).contents"
        >
          <div class="reason-mobile item-reason card-shadow">
            <h5>{{ slide.name }}</h5>
          </div>
        </slide>
      </carousel>

      <div class="our-choice flex-column">
        <div class="reasons flex-row">
          <div
            :key="item.id"
            v-for="item in this.PAGE_ID[0].blocks.find(
              (e) => e.name === 'we-create'
            ).contents"
            class="item-reason card-shadow"
          >
            <h5>{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'directors')"
      class="directors-mobile section"
    >
      <h2>Руководство БЕСТРОМ</h2>
      <carousel
        :items-to-show="1.3"
        :autoplay="3800"
        :wrap-around="true"
        class="our-choice-mobile"
      >
        <slide
          :key="slide.id"
          v-for="slide in this.PAGE_ID[0].blocks.find(
            (e) => e.name === 'directors'
          ).contents"
        >
          <div class="director-item flex-column">
            <img
              :alt="slide.file[0].alt"
              :src="'http://bexram.online:8001' + slide.file[0].file"
            />
            <h5>{{ slide.name }}</h5>
            <p>{{ slide.text }}</p>
          </div>
        </slide>
      </carousel>
    </section>

    <section class="history-development-desktop section">
      <h2>История развития</h2>

      <div class="history-development card-shadow">
        <carousel :items-to-show="4.5" :wrap-around="true">
          <slide :key="item.id" v-for="item in HISTORY">
            <p class="carousel__item">{{ item.year }}</p>
          </slide>
          <template #addons="{ currentSlide }">
            <div class="history-description">
              <img
                :alt="findHistory(currentSlide + 1).description"
                :src="findHistory(currentSlide + 1).img"
              />
              <h3>{{ findHistory(currentSlide + 1).description }}</h3>
            </div>
          </template>
        </carousel>
      </div>
    </section>
    <!-- /.section -->

    <section class="clients-desktop section">
      <h2>Клиенты</h2>
      <div class="slider-content card-shadow">
        <carousel :breakpoints="breakpoints">
          <slide :key="client.id" v-for="client in CLIENTS">
            <app-partners-item
              :alt="client.alt"
              :image="client.logo"
              @click="showClient(client.alt)"
            ></app-partners-item>
          </slide>
          <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 3" />
            <pagination v-if="slidesCount > 3" />
          </template>
        </carousel>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'purpose')"
      class="purpose-desktop section"
    >
      <h2>
        {{
          this.PAGE_ID[0].blocks.find((e) => e.name === "purpose").contents[0]
            .name
        }}
      </h2>
      <div class="purpose card-shadow flex-column">
        <h5>
          {{
            this.PAGE_ID[0].blocks.find((e) => e.name === "purpose").contents[0]
              .text
          }}
        </h5>
      </div>
    </section>
    <!-- /.section -->

    <section
      v-if="this.PAGE_ID[0].blocks.find((e) => e.name === 'mission')"
      class="mission-desktop section"
    >
      <h2>
        {{
          this.PAGE_ID[0].blocks.find((e) => e.name === "mission").contents[0]
            .name
        }}
      </h2>
      <div class="mission card-shadow flex-column">
        <h5>
          {{
            this.PAGE_ID[0].blocks.find((e) => e.name === "mission").contents[0]
              .text
          }}
        </h5>
      </div>
    </section>
    <!-- /.section -->

    <transition name="modal">
      <app-modal-partners-item
        :alt="customers.alt"
        :image="customers.logo"
        :machines="customers.machines"
        :text="customers.description"
        :title="customers.name"
        @close="customers.showModal = false"
        v-if="customers.showModal"
      ></app-modal-partners-item>
    </transition>
  </main>
  <app-footer></app-footer>
</template>

<script>
import appFooter from "@/components/appFooter"
import appHeader from "@/components/appHeader"
import appHiddenItem from "@/components/appHiddenItem"
import appPartnersItem from "@/components/appPartnersItem"
import appModalPartnersItem from "@/components/appModalPartnersItem"
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel"
import { mapActions, mapGetters } from "vuex"

export default {
  data() {
    return {
      checkSlide: 0,
      customers: {
        showModal: false,
      },
      breakpoints: {
        0: {
          itemsToShow: 1.5,
          snapAlign: "center",
          wrapAround: true,
        },
        1248: {
          itemsToShow: 3,
          snapAlign: "center",
          mouseDrag: false,
          touchDrag: false,
          wrapAround: true,
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      CLIENTS: "clients/CLIENTS",
      HISTORY: "history/HISTORY",
      PAGE_ID: "page/PAGE_ID",
    }),
  },
  methods: {
    ...mapActions({
      GET_CLIENTS: "clients/GET_CLIENTS",
      GET_HISTORY: "history/GET_HISTORY",
      GET_PAGE_ID: "page/GET_PAGE_ID",
    }),
    routerPush(path) {
      this.$router.push("/" + path)
      window.scrollTo(0, 0);
    },
    showClient(client) {
      this.customers = this.CLIENTS.find((e) => e.alt === client)
      this.customers.machines = true
      this.customers.showModal = true
    },
    findHistory(current) {
      if (this.HISTORY.length > 0) {
        return this.HISTORY.find((e) => e.id === current)
      } else {
        return { year: "", description: "", img: "" }
      }
    },
  },
  watch: {
    customers: {
      handler() {
        if (this.customers.showModal) {
          document.body.classList.add("modal-open")
        } else {
          document.body.classList.remove("modal-open")
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.GET_CLIENTS()
    this.GET_HISTORY()
    this.GET_PAGE_ID(2)
  },
  components: {
    appHeader,
    appFooter,
    appHiddenItem,
    appPartnersItem,
    appModalPartnersItem,
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  name: "appPageAbout",
}
</script>

<style scoped>
.reasons {
  margin: 1rem 0;
  flex-wrap: wrap;
  gap: 1rem 1rem;
}

.item-reason {
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 30%;
  height: 7rem;
  padding: 1rem 0;
}

.item-reason h5 {
  width: 90%;
}

.item-reason:hover .hidden-item {
  opacity: 1;
}

.item-reason:hover > img {
  -webkit-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px);
}

.director-item {
  justify-content: space-between;
  width: 30%;
}

.director-item h5 {
  margin: 0.5rem 0;
}

.director-item p {
  margin: 0;
  padding-top: 0.5rem;
  border-top: 1px solid #2fc1ff;
}

.history-development {
  padding: 2rem 3rem;
}

.history-development p {
  font-size: 18px;
  color: #2fc1ff;
}

.history-description {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
}

.history-description img {
  max-width: 6rem;
  max-height: 6rem;
}

.history-description h3 {
  font-weight: bold;
  font-size: 75px;
  line-height: normal;
  margin: 0 0.5rem;
  align-self: auto;
}

.purpose,
.mission {
  padding: 1rem 2rem;
}

.directors-mobile,
.history-development-mobile,
.our-choice-mobile {
  display: none;
}

@media (max-width: 980px) {
  .about-content {
    margin: 0 1rem;
    width: 100%;
  }

  .text-about-content {
    padding: 1rem 0;
  }

  .image-content {
    width: 100%;
  }

  .directors-mobile,
  .history-development-mobile,
  .our-choice-mobile {
    display: block;
    margin-bottom: 0.5rem;
  }

  .history-development-mobile p {
    color: #2fc1ff;
  }

  .history-development {
    height: 15rem;
    padding: 0;
  }

  .history-description {
    height: 10rem;
  }

  .history-description img {
    max-width: 3rem;
    max-height: 3rem;
    align-self: center;
  }

  .history-description h3 {
    font-size: 16px;
  }

  .content-btn,
  .our-choice,
  .directors-desktop,
  .history-development-desktop,
  .clients-desktop,
  .purpose-desktop,
  .mission-desktop,
  .image-world {
    display: none;
  }

  .reason-mobile {
    width: 100%;
    margin: 1rem 1rem 1rem 0.1rem;
  }

  .reason-mobile h5 {
    font-size: 1rem;
  }

  .director-item {
    margin: 0 0.5rem;
    width: auto;
  }

  .director-item img {
    width: 100%;
    align-self: center;
  }
}
</style>
