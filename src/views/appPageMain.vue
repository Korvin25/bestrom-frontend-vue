<template>
  <app-header></app-header>

  <main class="main-content flex-column">

    <section class="section">
      <h2>Деятельность компании БЕСТРОМ</h2>
      <div class="slider-content flex-row card-shadow">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>

        <app-block-content
                id="1"
                title="БЕСТРОМ СЕГОДНЯ"
                text="Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем"
                image="content_image.png"
        ></app-block-content>

        <div class="arrow">
          <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
        </div>
        <!-- точки перехода для слайдера -->
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

      <carousel class="carousel" :autoplay="3000" :settings='settings'>
        <slide v-for="slide in 10" :key="slide">
          <div class="partners-block carousel__item flex-column">
            <app-partners-item link="https://yandex.ru" image="logo-vtb.png"></app-partners-item>
            <app-partners-item link="https://yandex.ru" image="logo-yamato.png"></app-partners-item>
          </div>
        </slide>
      </carousel>

      <div class="slider-content flex-row card-shadow partners-slider-content">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>
        <!-- /.arrow -->
        <div class="flex-row partners">
          <app-partners-item link="https://yandex.ru" image="logo-vtb.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-yamato.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-festo.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-siemens.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-interroll.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-rexroth.png"></app-partners-item>
        </div>
        <!-- /.partners -->
        <div class="arrow">
          <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
        </div>
        <!-- /.arrow -->
        <!-- точки перехода для слайдера -->
      </div>
      <!-- /.slider-content -->
    </section>
    <!-- /.section -->

    <section class="section">
      <h2>Клиенты</h2>

      <carousel class="carousel" :autoplay="3000" :settings='settings'>
        <slide v-for="slide in 10" :key="slide">
          <div class="partners-block carousel__item flex-column">
            <app-partners-item link="https://yandex.ru" image="logo-babaevskiy.png"></app-partners-item>
            <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
          </div>
        </slide>
      </carousel>

      <div class="slider-content flex-row card-shadow partners-slider-content">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>
        <div class="flex-row partners">
          <app-partners-item link="https://yandex.ru" image="logo-babaevskiy.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-krasny-oktyabr.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-rot-front.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-jacobs.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-faberlic.png"></app-partners-item>
          <app-partners-item link="https://yandex.ru" image="logo-baisad.png"></app-partners-item>
        </div>
        <div class="arrow">
          <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
        </div>
        <!-- точки перехода для слайдера -->
      </div>
    </section>
    <!-- /.section -->
    <section class="section">
      <h2>Новости</h2>

      <carousel class="carousel" :items-to-show="1.3">
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
import { Carousel, Slide } from 'vue3-carousel';

export default {
  data() {
    return {
      settings: {
        itemsToShow: 1.5,
        wrapAround: true,
        snapAlign: 'center'
      },
    }
  },
  methods: {
    pushToCatalog(radioitem) {
      this.$store.state.radioCatalogSelect = radioitem
      this.$router.push(`/catalog`)
      window.scrollTo(0,0);
    },
  },
  components: {
    appHeader, appFooter, appPartnersItem, appBlockContent, appMainNewsBigItem,
    appMainNewsSmallItem, appHiddenItem, Carousel, Slide, appMainNewsMobile
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
    .carousel {
      display: none;
    }
    @media (max-width: 1248px) {
      .carousel {
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
      .partners-slider-content, .news {
        display: none;
      }
    }
</style>