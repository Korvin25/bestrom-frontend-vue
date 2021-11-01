<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <h2>БЕСТРОМ - 420С</h2>
            <div class="catalog-item-card flex-row card-shadow">
                <div class="arrow">
                    <img style="margin-right: 8px" src="../assets/arrow_left.png" alt="arrow_left">
                </div>
                <img class="catalog-item-card-image" src="../assets/content_image.png" alt="content_image">
                <div class="arrow">
                    <img style="margin-left: 8px" src="../assets/arrow_right.png" alt="arrow_right">
                </div>
            </div>
            <!-- ./catalog-item-card -->

            <div class="buttons-section catalog-ig-buttons flex-row">
                <button @click="showModalCall = true" class="btn">ЗАКАЗАТЬ ЗВОНОК</button>
                <button @click="showModalApplication = true" class="btn">ОТПРАВИТЬ ЗАЯВКУ</button>
            </div>

            <div class="details flex-column card-shadow">
                <div class="desktop-section details-select flex-row">
                    <div v-for="(item, index) in aboutItem"
                         :key="index"
                         @click="isSelected = index"
                         :class="isSelected === index ? 'details-select-item-choice' : ''"
                         class="details-select-item flex-column card-shadow">
                        <img v-if="isSelected !== index" :src="require(`../assets/${item.disableImage}`)" alt="catalog-details">
                        <img v-if="isSelected === index" :src="require(`../assets/${item.activeImage}`)" alt="catalog-details">
                        <p>{{ item.title }}</p>
                    </div>
                </div>
                <!-- /.details-select desktop-section -->

                <div class="mobile-section details-select">
                    <carousel :snap-align="'center'" :items-to-show="1.6">
                        <slide v-for="(item, index) in aboutItem" :key="index">
                            <div @click="isSelected = index"
                                 :class="isSelected === index ? 'details-select-item-choice' : ''"
                                 class="details-select-item carousel__item flex-column card-shadow">
                                <img v-if="isSelected !== index" :src="require(`../assets/${item.disableImage}`)" alt="catalog-details">
                                <img v-if="isSelected === index" :src="require(`../assets/${item.activeImage}`)" alt="catalog-details">
                                <p>{{ item.title }}</p>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <!-- /.details-select mobile-section -->

                <app-details-select-settings v-if="isSelected === 0"></app-details-select-settings>
                <app-details-select-products v-if="isSelected === 1"></app-details-select-products>
                <app-details-select-inventory v-if="isSelected === 2"></app-details-select-inventory>
                <app-details-select-packet v-if="isSelected === 3"></app-details-select-packet>
                <app-details-select-solution v-if="isSelected === 4"></app-details-select-solution>
            </div>
            <!-- /.details -->
        </section>

        <section class="section">
            <h2 class="title-brand">Бренды купившие эту машину</h2>
            <div class="desktop-section brands flex-row">
                <app-partners-item
                        image="logo-faberlic.png"
                        title="«Красный Октябрь»"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        :machines="true"
                ></app-partners-item>
                <app-partners-item
                        image="logo-jacobs.png"
                        title="«Красный Октябрь»"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        :machines="true"
                ></app-partners-item>
                <app-partners-item
                        image="logo-babaevskiy.png"
                        title="«Красный Октябрь»"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                        :machines="true"
                ></app-partners-item>
            </div>

            <div class="mobile-section brands">
                <carousel :items-to-show="1.4">
                    <slide v-for="item in 3" :key="item">
                        <app-partners-item
                                image="logo-babaevskiy.png"
                                title="«Красный Октябрь»"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque illum impedit ipsa iure iusto laboriosam laudantium maiores officiis pariatur praesentium quam quod repudiandae sequi sint tempora unde, voluptatum. Odio?"
                                :machines="true"
                        ></app-partners-item>
                    </slide>
                </carousel>
            </div>
        </section>
    </main>

    <transition-group name="modal">
        <app-modal-catalog-call v-if="showModalCall" @close="showModalCall = false"></app-modal-catalog-call>
        <app-modal-catalog-application v-if="showModalApplication" @close="showModalApplication = false"></app-modal-catalog-application>
    </transition-group>

    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appDetailsSelectSettings from "@/components/appDetailsSelectSettings";
    import appDetailsSelectProducts from "@/components/appDetailsSelectProducts";
    import appDetailsSelectInventory from "@/components/appDetailsSelectInventory";
    import appDetailsSelectPacket from "@/components/appDetailsSelectPacket";
    import appDetailsSelectSolution from "@/components/appDetailsSelectSolution";
    import appPartnersItem from "@/components/appPartnersItem";
    import appModalCatalogCall from "@/components/appModalCatalogCall";
    import appModalCatalogApplication from "@/components/appModalCatalogApplication";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        data() {
          return {
              aboutItem: [
                  {
                      disableImage: 'catalog-details-settings.png',
                      activeImage: 'catalog-details-settings-active.png',
                      title: 'технические характеристики'
                  },
                  {
                      disableImage: 'catalog-details-products.png',
                      activeImage: 'catalog-details-products-active.png',
                      title: 'продукты'
                  },
                  {
                      disableImage: 'catalog-details-inventory.png',
                      activeImage: 'catalog-details-inventory-active.png',
                      title: 'доп. оборудование'
                  },
                  {
                      disableImage: 'catalog-details-packet.png',
                      activeImage: 'catalog-details-packet-active.png',
                      title: 'тип пакета'
                  },
                  {
                      disableImage: 'catalog-details-solution.png',
                      activeImage: 'catalog-details-solution-active.png',
                      title: 'готовые решения'
                  }
              ],
              isSelected: 0,
              showModalCall: false,
              showModalApplication: false
          }
        },
        watch: {
            showModalCall() {
                if (this.showModalCall) {
                    document.body.classList.add('modal-open') 
                } else {
                    document.body.classList.remove('modal-open') 
                }
            },
            showModalApplication() {
                if (this.showModalApplication) {
                    document.body.classList.add('modal-open') 
                } else {
                    document.body.classList.remove('modal-open') 
                }
            }
        },
        components: {
            appHeader, appFooter, appDetailsSelectSettings, appDetailsSelectProducts,
            appDetailsSelectInventory, appDetailsSelectPacket, appDetailsSelectSolution,
            appPartnersItem, appModalCatalogCall, appModalCatalogApplication, Carousel, Slide
        },
        name: "appPageCatalogId"
    }
</script>

<style scoped>
    .catalog-item-card {
        padding: 1rem;
        align-items: center;
    }
        .catalog-item-card-image {
            width: 20rem;
            height: 25rem;
        }
    .details {
        margin: 1rem 0;
        height: 100%;
        padding: 2rem 1rem;
    }
    .details-select {
        justify-content: flex-start;
    }
    .details-select-item {
        transition: all .5s;
        cursor: pointer;
        text-align: center;
        padding: 0.5rem 1rem;
        align-items: center;
        margin: 0 1rem;
    }
        .details-select-item:hover {
            transition: all .5s;
            background: rgba(0, 0, 0, 0.1);
        }
    .details-select-item-choice {
        color: #FFFFFF;
        background: #2FC1FF;
        box-shadow: inset 0 1px 10px 1px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .details-select-item-choice:hover {
        background: #2FC1FF;
    }
    .catalog-ig-buttons {
        margin: 0 -1rem;
    }
    .catalog-ig-buttons .btn {
        flex-grow: 1;
        margin: 0 1rem;
    }
    .buttons-section.catalog-ig-buttons {
        margin: 1rem -1rem;
    }
    .desktop-section.brands {
        margin: 0 -1rem;
    }
    .title-brand {
        margin: 1rem 0;
    }
    .desktop-section {
        display: flex;
    }
    .mobile-section {
        display: none;
    }
    @media (max-width: 980px) {
        .desktop-section {
            display: none;
        }
        .mobile-section {
            display: flex;
        }
        .details {
            padding: 1rem;
            margin: 0 0 1rem 0;
        }
        .catalog-item-card {
            justify-content: center;
            padding: 3rem;
        }
        .catalog-item-card img {
            max-width: 30rem;
            width: 100%;
            height: auto;
            align-self: center;
        }
        .buttons-section.catalog-ig-buttons {
            margin: 1rem -0.5rem;
        }
            .buttons-section.catalog-ig-buttons .btn {
                padding: 0;
                margin: 0 0.5rem;
                font-weight: bold;
                font-size: 12px;
            }
        .mobile-section.details-select{
            display: block;
            padding: 0 0.5rem;
            margin: 0;
        }
        .mobile-section .details-select-item {
            width: 100%;
            margin: 0.5rem 0.5rem;
         }
         .title-brand {
            margin: 0;
        }
        .mobile-section.brands {
            display: block;
            margin: 0 0.5rem;
        }
    }
</style>