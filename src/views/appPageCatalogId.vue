<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <h2>БЕСТРОМ - 420С</h2>

            <div class="slider-content card-shadow">
                <carousel :itemsToShow=1 :snapAlign="'start'" :wrapAround=true>
                    <slide v-for="index in 3"  :key="index">
                        <img class="catalog-item-card-image" src="../assets/content_image.png" alt="content_image">
                    </slide>
                    <template #addons="{ slidesCount }">
                        <navigation v-if="slidesCount > 1" />
                        <pagination v-if="slidesCount > 1" />
                    </template>
                </carousel>
            </div>

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
                                 class="details-select-item flex-column card-shadow">
                                <img v-if="isSelected !== index" :src="require(`../assets/${item.disableImage}`)" alt="catalog-details">
                                <img v-if="isSelected === index" :src="require(`../assets/${item.activeImage}`)" alt="catalog-details">
                                <p>{{ item.title }}</p>
                            </div>
                        </slide>
                        <template #addons>
                            <pagination />
                        </template>
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
    </main>

    <transition-group name="modal">
        <app-modal-catalog-call v-if="showModalCall" @close="showModalCall = false"></app-modal-catalog-call>
        <app-modal-catalog-application v-if="showModalApplication" @close="showModalApplication = false"></app-modal-catalog-application>
        <app-modal-partners-item v-if="customers.showModal"
                                 @close="customers.showModal = false"
                                 :image="customers.logo"
                                 :alt="customers.alt"
                                 :title="customers.name"
                                 :text="customers.description"
                                 :machines="customers.machines"
        ></app-modal-partners-item>
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
                      snapAlign: 'center',
                      mouseDrag: false,
                      touchDrag: false,
                      wrapAround: true
                  },
              },
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
        computed: {
            ...mapGetters({
                CLIENTS:'clients/CLIENTS'
            })
        },
        methods: {
            ...mapActions({
                GET_CLIENTS:'clients/GET_CLIENTS'
            }),
            showClient(client) {
                this.customers = this.CLIENTS.find(e => e.alt === client)
                this.customers.machines = true
                this.customers.showModal = true
            },
        },
        mounted() {
            this.GET_CLIENTS()
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
            appPartnersItem, appModalCatalogCall, appModalCatalogApplication, Carousel, Slide,
            Navigation, Pagination, appModalPartnersItem
        },
        name: "appPageCatalogId"
    }
</script>

<style scoped>
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
    .desktop-section {
        display: flex;
    }
    .mobile-section {
        display: none;
    }
    .slider-content {
        margin: 2rem 0 1rem 0;
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
        .catalog-item-card-image {
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
            margin: 0;
        }
        .mobile-section .details-select-item {
            width: 100%;
            align-self: stretch;
            margin: 1rem;
         }
         .title-brand {
            margin: 0;
        }
    }
</style>