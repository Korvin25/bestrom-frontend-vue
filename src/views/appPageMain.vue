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
      <div class="flex-row">
        <div class="inventory-item flex-column card-shadow">
          <h4>ПО ТИПУ МАШИН</h4>
          <img style="margin-bottom: 4rem" src="../assets/inventory-item-1.png" alt="inventory item image">
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
        <div class="inventory-item flex-column card-shadow">
          <h4>ПО ПРОДУКТУ</h4>
          <img src="../assets/inventory-item-2.png" alt="inventory item image">
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
        <div class="inventory-item flex-column card-shadow">
          <h4> ПО УПАКОВКЕ</h4>
          <img style="margin-bottom: 4rem" src="../assets/inventory-item-3.png" alt="inventory item image">
          <app-hidden-item text="ПОДРОБНЕЕ"></app-hidden-item>
        </div>
        <!-- /.inventory-item -->
      </div>
      <!-- /.inventory-items -->
    </section>
    <!-- /.section -->

    <section class="section">
      <h2>Партнеры</h2>

      <div class="slider-content flex-row card-shadow">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>
        <!-- /.arrow -->
        <div class="partners flex-row">
          <app-partners-item image="logo-vtb.png"></app-partners-item>
          <app-partners-item image="logo-yamato.png"></app-partners-item>
          <app-partners-item image="logo-festo.png"></app-partners-item>
          <app-partners-item image="logo-siemens.png"></app-partners-item>
          <app-partners-item image="logo-interroll.png"></app-partners-item>
          <app-partners-item image="logo-rexroth.png"></app-partners-item>
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
      <div class="slider-content flex-row card-shadow">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>
        <div class="partners flex-row">
          <app-partners-item image="logo-babaevskiy.png"></app-partners-item>
          <app-partners-item image="logo-krasny-oktyabr.png"></app-partners-item>
          <app-partners-item image="logo-rot-front.png"></app-partners-item>
          <app-partners-item image="logo-jacobs.png"></app-partners-item>
          <app-partners-item image="logo-faberlic.png"></app-partners-item>
          <app-partners-item image="logo-baisad.png"></app-partners-item>
          <app-partners-item image="logo-jacobs.png"></app-partners-item>
          <app-partners-item image="logo-faberlic.png"></app-partners-item>
          <app-partners-item image="logo-baisad.png"></app-partners-item>
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
      <div class="news flex-column">

        <app-main-news-big-item
                title="Новое поколение упаковочных машин"
                text="Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем."
                image="news-img.png"
        ></app-main-news-big-item>

        <div class="news-items flex-row">

          <app-main-news-small-item
                  title="Новое поколение упаковочных машин"
                  image="news-img.png"
          ></app-main-news-small-item>
          <app-main-news-small-item
                  title="Работаем на качество!"
                  image="content_image.png"
          ></app-main-news-small-item>
          <app-main-news-small-item
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

export default {
  components: {
    appHeader, appFooter, appPartnersItem, appBlockContent, appMainNewsBigItem,
    appMainNewsSmallItem, appHiddenItem
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
    .inventory-item:hover .hidden-item {
      display: block;
    }
    .news .hidden-item {
      background: rgba(106, 106, 106, 0.8);
    }
    .news-items {
      margin: 3rem 0;
      justify-content: space-between;
    }
    @media (max-width : 650px) {

    }
</style>