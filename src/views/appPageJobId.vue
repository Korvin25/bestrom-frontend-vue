<template>
    <app-header></app-header>
    <main class="main-content flex-column">

        <section class="desktop-section section flex-column">
            <h2>Вакансии</h2>
            <div class="job-item flex-column card-shadow">
                <div class="flex-row">
                    <img src="../assets/job-image.png" alt="job image">
                    <div class="flex-column job-item-description">
                        <h4>Грузчик</h4>
                        <h5>Основные требования:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda consequuntur dolores doloribus exercitationem hic id in maxime molestiae mollitia, nemo obcaecati, perferendis provident quas quia quisquam quod reprehenderit, veniam!</p>
                        <h5>Основные навыки:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                        <h5>Образование:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                        <h5>Опыт работы:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                        <h5>Вы получаете:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                    </div>
                    <div class="flex-column job-item-pay">
                        <h4>Заработная плата</h4>
                        <p>45 000 руб.</p>
                    </div>
                </div>
                <div class="flex-row flex-buttons">
                    <a href="tel:+78005557457">
                        <button class="btn">Позвонить</button>
                    </a>
                    <button @click="showModalRespond = true" class="btn">Откликнуться</button>
                </div>
            </div>
        </section>
        <!-- ./desktop-section -->

        <section class="mobile-section section flex-column">
            <div class="vacation card-shadow">
                <h2>ГРУЗЧИК</h2>
            </div>
            <div class="flex-column job-item card-shadow">
                <img src="../assets/job-image.png" alt="job image">
                <h4>Заработная плата</h4>
                <p>45 000 руб</p>
                <h4>Основные требования</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda consequuntur dolores doloribus exercitationem hic id in maxime molestiae mollitia, nemo obcaecati, perferendis provident quas quia quisquam quod reprehenderit, veniam!</p>
                <h4>Основные навыки</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                <h4>Вас ждёт</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci commodi cum cupiditate dolores, doloribus eum excepturi ipsa iste maxime molestiae nulla odio perferendis porro quae quasi vel veniam, voluptates.</p>
                <div class="flex-row flex-buttons">
                    <a href="tel:+78005557457">
                        <button class="btn">Позвонить</button>
                    </a>
                    <button @click="showModalRespond = true" class="btn">Откликнуться</button>
                </div>
            </div>
        </section>
        <!-- ./mobile-section -->
    </main>

    <transition-group name="modal">
        <app-modal-job-respond v-if="showModalRespond" @close="showModalRespond = false"></app-modal-job-respond>
    </transition-group>

    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";
    import appModalJobRespond from "@/components/appModalJobRespond";

    export default {
        data() {
            return {
                showModalRespond: false
            }
        },
        watch: {
            showModalRespond() {
                if (this.showModalRespond) {
                    document.body.classList.add('modal-open') 
                } else {
                    document.body.classList.remove('modal-open') 
                }
            }
        },
        components: {
            appHeader, appFooter, appModalJobRespond
        },
        name: "appPageJobId"
    }
</script>

<style scoped>
    .job-item {
        margin: 1rem 0;
        padding: 2rem 3rem;
    }
    .job-item img {
        align-self: center;
        width: 12rem;
        height: 12rem;
    }
    .job-item-description {
        width: 100%;
        margin: 0 2rem;
    }
    .job-item-description h4 {
        margin: 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #2FC1FF;
    }
    .job-item-description h5 {
        margin: 1rem 0;
    }
    .job-item-description p {
        margin: 0;
    }
    .job-item-pay {
        max-width: 30rem;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
    }
    .job-item-pay h4 {
        margin: 0;
    }
    .job-item-pay p {
        margin-top: 8rem;
        text-align: center;
        font-size: 2.5rem;
    }
    .flex-buttons {
        margin-top: 3rem;
        justify-content: space-around;
    }
    .flex-buttons .btn {
        width: 100%;
        margin: 0 1rem;
    }
    .flex-buttons a {
        margin-right: 2rem;
        width: 100%;
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
            margin-top: 1rem;
            display: flex;
        }
        .vacation {
            margin: 0 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .vacation h2 {
            margin: 1rem 0;
        }
        .job-item {
            margin: 1rem 0.5rem;
            padding: 1rem;
        }
            .job-item img {
                margin: 0;
                align-self: center;
                max-width: 14rem;
                max-height: 14rem;
                width: auto;
                height: auto;
            }
            .job-item h4 {
                margin: 2rem 0 0 0;
                font-weight: 600;
                font-size: 16px;
            }
            .job-item p {
                font-weight: 600;
                font-size: 16px;
                margin: 1rem 0;
            }
            .flex-buttons a {
                margin-right: 1rem;
            }
            .flex-buttons .btn {
                margin: 0;
                width: 100%;
                font-weight: bold;
                font-size: 14px;
            }
    }
</style>