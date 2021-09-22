<template>
  <app-header></app-header>

  <main class="main-content flex-column">

    <section class="section">
      <h2>Деятельность компании БЕСТРОМ</h2>
      <div class="slider-content flex-row">
        <div class="arrow">
          <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
        </div>

        <app-main-slider-content
                title="БЕСТРОМ СЕГОДНЯ"
                text="Мы производим высококачественное упаковочное оборудование, которое будет четко и в срок отрабатывать необходимые объёмы. Вас ожидает лучший сервис, гарантийное обслуживание, высококвалифицированные специалисты, консультаты, которые помогут вам, в случае возникновения каких-либо проблем"
                image="content_image.png"
        ></app-main-slider-content>

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
        <div class="inventory-item flex-column">
          <h4>ПО ТИПУ МАШИН</h4>
          <img style="margin-bottom: 4rem" src="../assets/inventory-item-1.png" alt="inventory item image">
          <div class="hidden-item">
            <div class="hidden-text">
              <p>ПОДРОБНЕЕ</p>
            </div>
          </div>
        </div>
        <!-- /.inventory-item -->
        <div class="inventory-item flex-column">
          <h4>ПО ПРОДУКТУ</h4>
          <img src="../assets/inventory-item-2.png" alt="inventory item image">
          <div class="hidden-item">
            <div class="hidden-text">
              <p>ПОДРОБНЕЕ</p>
            </div>
          </div>
        </div>
        <!-- /.inventory-item -->
        <div class="inventory-item flex-column">
          <h4> ПО УПАКОВКЕ</h4>
          <img style="margin-bottom: 4rem" src="../assets/inventory-item-3.png" alt="inventory item image">
          <div class="hidden-item">
            <div class="hidden-text">
              <p>ПОДРОБНЕЕ</p>
            </div>
          </div>
        </div>
        <!-- /.inventory-item -->
      </div>
      <!-- /.inventory-items -->
    </section>
    <!-- /.section -->

    <section class="section">
      <h2>Партнеры</h2>

      <div class="slider-content flex-row">
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
      <div class="slider-content flex-row">
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
import appMainSliderContent from "@/components/appMainSliderContent";
import appMainNewsBigItem from "@/components/appMainNewsBigItem";
import appMainNewsSmallItem from "@/components/appMainNewsSmallItem";

export default {
  components: {
    appHeader, appFooter, appPartnersItem, appMainSliderContent, appMainNewsBigItem, appMainNewsSmallItem
  }
}
</script>

<style>
    .slider-content {
      background: #FFFFFF;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      padding: 2rem 1rem;
      align-items: center;
    }
    .arrow {
      min-width: 63px;
      min-height: 63px;
      background: #FFFFFF;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
      border-radius: 99px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .arrow:hover {
      cursor: pointer;
      background: rgba(47, 193, 255, 0.75);
    }
      .arrow img {
        width: 25px;
        height: 28px;
      }
    .inventory-item {
      width: 30%;
      position: relative;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
    }
    .inventory-item:hover .hidden-item {
      display: block;
    }
    .partners {
      justify-content: space-evenly;
      flex-wrap: wrap;
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