<template>
  <app-header></app-header>

  <main class="main-content flex-column">

    <section class="section">
      <h2 class="desktop-section">Деятельность компании БЕСТРОМ</h2>
      <h2 class="mobile-section">Деятельность компании</h2>

      <div class="slider-content card-shadow">
        <carousel :itemsToShow=1 :snapAlign="'start'" :wrapAround=true>
          <slide v-for="index in 3"  :key="index">
            <app-block-content
                    id="1"
                    title="БЕСТРОМ СЕГОДНЯ"
                    text="Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем"
                    image="content_image.png"
            ></app-block-content>
          </slide>
          <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 1" />
            <pagination v-if="slidesCount > 1" />
          </template>
        </carousel>
      </div>
    </section>
    <!-- /.section -->

    <section class="section">
      <h2>Подбор оборудования</h2>
      <div class="flex-row inventory-mobile">
        <div @click="pushToCatalog('ПОДБОР ПО ТИПУ МАШИНЫ')" class="inventory-item flex-column card-shadow">
          <h4>ПО ТИПУ МАШИН</h4>
          <div class="inventory-item-img">
            <img  src="../assets/inventory-item-1.png" alt="inventory item image">
          </div>
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
        <div @click="pushToCatalog('ПОДБОР ПО ТИПУ ПРОДУКТА')" class="inventory-item flex-column card-shadow">
          <h4>ПО ПРОДУКТУ</h4>
          <div class="inventory-item-img">
            <img src="../assets/inventory-item-2.png" alt="inventory item image">
          </div>
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
        <div @click="pushToCatalog('ПОДБОР ПО ТИПУ УПАКОВКИ')" class="inventory-item flex-column card-shadow">
          <h4> ПО УПАКОВКЕ</h4>
          <div class="inventory-item-img">
            <img src="../assets/inventory-item-3.png" alt="inventory item image">
          </div>
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
      </div>
      <!-- /.inventory-items -->
    </section>
    <!-- /.section -->

    <section class="section">
      <h2>Партнеры</h2>
      <div class="slider-content card-shadow">
        <carousel :breakpoints='breakpoints'>
          <slide v-for="partner in PARTNERS"  :key="partner.id">
            <app-partners-item
                    @click="showPartner(partner.alt)"
                    :image="partner.logo"
                    :alt="partner.alt"
            ></app-partners-item>
          </slide>
          <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 3" />
            <pagination v-if="slidesCount > 3" />
          </template>
        </carousel>
      </div>
    </section>

    <section class="section">
      <h2>Клиенты</h2>
      <div class="slider-content card-shadow">
        <carousel :breakpoints='breakpoints'>
          <slide v-for="client in CLIENTS"  :key="client.id">
            <app-partners-item
                    @click="showClient(client.alt)"
                    :image="client.logo"
                    :alt="client.alt"
            ></app-partners-item>
          </slide>
          <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 3" />
            <pagination v-if="slidesCount > 3" />
          </template>
        </carousel>
      </div>
    </section>

    <section class="section">
      <h2>Новости</h2>

      <carousel class="mobile-section" :breakpoints='breakpoints'>
        <slide v-for="slide in 3" :key="slide">
          <app-main-news-mobile
                  class="carousel__item"
                  id="2"
                  title="Новое поколение упаковочных машин"
                  image="news-img.png"
          ></app-main-news-mobile>
        </slide>
      </carousel>

      <div class="news flex-column">
        <app-main-news-big-item
                id="1"
                title="Новое поколение упаковочных машин"
                text="Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем."
                image="news-img.png"
        ></app-main-news-big-item>

        <div class="news-items flex-row">
          <app-main-news-small-item
                  id="2"
                  title="Новое поколение упаковочных машин"
                  image="news-img.png"
          ></app-main-news-small-item>
          <app-main-news-small-item
                  id="3"
                  title="Работаем на качество!"
                  image="content_image.png"
          ></app-main-news-small-item>
          <app-main-news-small-item
                  id="4"
                  title="Выходим на новую скорость!"
                  image="content_image.png"
          ></app-main-news-small-item>
        </div>
        <!-- /.news-item-small -->
      </div>
      <!-- /.news flex-column -->
    </section>
    <!-- /.section -->

    <transition name="modal">
      <app-modal-partners-item v-if="customers.showModal"
                               @close="customers.showModal = false"
                               :image="customers.logo"
                               :alt="customers.alt"
                               :title="customers.name"
                               :text="customers.description"
                               :machines="customers.machines"
      ></app-modal-partners-item>
    </transition>

  </main>
  <app-footer></app-footer>
</template>

<script>
import appHeader from "@/components/appHeader";
import appFooter from "@/components/appFooter";
import appPartnersItem from "@/components/appPartnersItem";
import appBlockContent from "@/components/appBlockContent";
import appMainNewsBigItem from "@/components/appMainNewsBigItem";
import appMainNewsSmallItem from "@/components/appMainNewsSmallItem";
import appHiddenItem from "@/components/appHiddenItem";
import appMainNewsMobile from "@/components/appMainNewsMobile";
import appModalPartnersItem from "@/components/appModalPartnersItem";
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      customers: {
        showModal: false,
      },
      breakpoints: {
        0: {
          itemsToShow: 1.5,
          snapAlign: 'center',
          wrapAround: true
        },
        1248: {
          itemsToShow: 3,
          snapAlign: 'start',
          mouseDrag: false,
          touchDrag: false,
          wrapAround: true
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      PARTNERS:'partners/PARTNERS',
      CLIENTS:'clients/CLIENTS'
    })
  },
  methods: {
    ...mapActions({
      GET_PARTNERS:'partners/GET_PARTNERS',
      GET_CLIENTS:'clients/GET_CLIENTS'
    }),
    pushToCatalog(radioitem) {
      this.$store.state.radioCatalogSelect = radioitem
      this.$router.push(`/catalog`)
      window.scrollTo(0,0);
    },
    showClient(client) {
      this.customers = this.CLIENTS.find(e => e.alt === client)
      this.customers.machines = true
      this.customers.showModal = true
    },
    showPartner(partner) {
      this.customers = this.PARTNERS.find(e => e.alt === partner)
      this.customers.machines = false
      this.customers.showModal = true
    }
  },
  watch: {
    customers: {
      handler() {
        if (this.customers.showModal) {
          document.body.classList.add('modal-open')
        } else {
          document.body.classList.remove('modal-open')
        }
      },
      deep: true
    },
  },
  mounted() {
    this.GET_PARTNERS()
    this.GET_CLIENTS()
  },
  components: {
    appHeader, appFooter, appPartnersItem, appBlockContent, appMainNewsBigItem,
    appMainNewsSmallItem, appHiddenItem, Carousel, Slide, Navigation, Pagination,
    appMainNewsMobile, appModalPartnersItem
  }
}
</script>

<style>
    .inventory-item {
      width: 30%;
      position: relative;
      align-items: center;
      justify-content: space-between;
    }
    .inventory-item-img {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .inventory-item-img img {
      width: 100%;
    }
        .inventory-item:hover .hidden-item {
            opacity: 1;
        }
        .inventory-item:hover h4,
        .inventory-item:hover img {
          -webkit-filter: blur(4px);
          -ms-filter: blur(4px);
          filter: blur(4px);
        }
    .news .hidden-item {
      background: rgba(106, 106, 106, 0.8);
    }
    .news-items {
      margin: 3rem 0;
      justify-content: space-between;
    }
    .desktop-section {
      display: block;
    }
    .mobile-section {
      display: none;
    }
    @media (max-width: 1248px) {
      .desktop-section {
        display: none;
      }
      .mobile-section {
        display: block;
      }
      .inventory-mobile {
        height: 44rem;
        flex-direction: column;
      }
      .inventory-item {
        flex-grow: 1;
        height: 30%;
        width: 100%;
        margin-bottom: 1rem;
      }
      .partners-block {
        flex-grow: 1;
        width: 100%;
      }
      .news {
        display: none;
      }
    }
</style>