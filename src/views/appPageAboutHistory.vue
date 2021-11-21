<template>
  <app-header></app-header>
  <main class="main-content flex-column">
    <section class="section">
      <h2>О компании</h2>
      <div class="history-company flex-column">
        <h4>История бестром</h4>

        <div class="first-row flex-row">
          <p>
            В 1989 году Королевская Нидерландская Компания "Бегеманн" и
            производственное объединение "Стромоборудование" учредили совместное
            предприятие, которое было названо "Бестром" - по начальным буквам
            названия компаний.В 1989 году Королевская Нидерландская Компания
            "Бегеманн" и производственное объединение "Стромоборудование"
            учредили совместное предприятие, которое было названо "Бестром" - по
            начальным буквам названия компаний. Компания "Бестром" была
            образована с целью создания и производства упаковочных машин, не
            уступающих по качеству и техническим характеристикам лучшим мировым
            образцам. Первая машина была выпущена в 1991 году по лицензии
            известной голландской компании UVA. Детали для этой машины были
            изготовлены в компании "Бестром", после чего специалисты поехали в
            Голландию, где собирали первую упаковочную машину под контролем
            голландских инженеров.
          </p>
          <div class="image-content">
            <div class="video flex-column">
              <div class="video-title flex-row">
                <img
                  class="logo"
                  src="../assets/bestrom_logo.png"
                  alt="bestrom logo"
                />
                <h1>БЕСТРОМ</h1>
              </div>
              <div class="video-play flex-column">
                <img src="../assets/video-play.png" alt="video play button" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex-row second-row">
          <img src="../assets/photo-history.jpg" alt="photo-history" />
          <p>
            В настоящее время компания "Бестром" производит и реализует:
            Упаковочные машины вертикального типа, которые предназначены для
            упаковки всех видов сыпучих, в том числе сильнопылящих продуктов в
            пакеты из термосвариваемых пленок (полиэтиленовых, полипропиленовых,
            ламинированных материалов). Примерный перечень упаковываемых
            продуктов: чай, кофе, крупы, сахар, соль, конфеты, макароны, мука,
            сухое молоко, майонез, специи, замороженные овощи, пельмени,
            стиральные порошки, орехи, семечки, чипсы, сухофрукты, минеральные и
            органические удобрения и другие продукты. Упаковочные машины для
            упаковки сыпучих продуктов в готовые бумажные пакеты для бакалейных
            товаров Упаковочные машины горизонтального типа, которые
            предназначены для упаковки штучных продуктов, таких, как:
            хлебобулочные изделия, шоколадные батончики, вафли, мороженое,
            бинты, вата, мыло, поролоновые губки и многие другие продукты.
            Комплексы групповой упаковки, предназначенные для автоматической
            групповой упаковки в термоусадочную пленку. Машины для формирования
            пакетов с плоским верхом и плоским дном типа “square bag” -
            «брикет». Дозаторы весовые комбинационные, объемные шнековые,
            объемные стаканчиковые, объемные ленточные (для грунтов).
            Дополнительное оборудование – загрузочные элеваторы, отводящие
            транспортеры , вибробункеры , накопительные поворотные столы, машины
            для вклейки zip-замка в пакеты, клипсаторные машины, этикетировочные
            машины и прочее.
          </p>
        </div>
      </div>
    </section>
  </main>
  <app-footer></app-footer>
</template>

<script>
import appHeader from "@/components/appHeader"
import appFooter from "@/components/appFooter"

export default {
  components: {
    appHeader,
    appFooter,
  },
  name: "appPageAboutHistory",
}
</script>

<style scoped>
.flex-row {
  justify-content: space-between;
}
.history-company p {
  margin: 0;
  padding: 26px 0 0 0;
  border-top: 1px solid #2fc1ff;
  width: 50%;
}
.image-content {
  padding: 0 0 0 2rem;
}
.video {
  align-self: flex-start;
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 22rem;
}
.second-row {
  margin-top: 2rem;
}
.second-row img {
  align-self: flex-start;
  width: 100%;
  max-width: 35rem;
}
.second-row p {
  width: 100%;
  padding: 0 0 0 2rem;
  border: none;
}

@media (max-width: 980px) {
  .first-row {
    flex-direction: column-reverse;
  }
  .first-row p {
    width: 100%;
    padding-top: 1rem;
    border: none;
  }
  .image-content {
    border-top: 1px solid #2fc1ff;
    padding: 1rem 0 0 0;
    height: 10rem;
    width: 100%;
  }
  .second-row {
    margin-top: 1rem;
    flex-direction: column;
  }
  .second-row p {
    width: 100%;
    margin: 1rem 0;
    border-bottom: 1px solid #2fc1ff;
    padding: 0 0 1rem 0;
  }
}
</style>
