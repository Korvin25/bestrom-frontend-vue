<template>
    <app-header></app-header>
    <main class="main-content flex-column">
        <section class="section">
            <h2>Название новости</h2>
            <div class="id-news flex-row">
                <div class="current-news flex-column">
                    <img src="../assets/full-news-image.png" alt="full-news-image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores at commodi dolor facere fugiat iusto minus mollitia nostrum perspiciatis praesentium, veniam voluptatem. Corporis fugiat fugit itaque mollitia praesentium?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur eaque fugiat iusto numquam porro provident quae quaerat tenetur. Amet consequatur cum expedita facilis inventore mollitia nobis, tempora veniam. Soluta.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut dolor ipsa natus perspiciatis rem tempore! Architecto autem dicta impedit molestias rem reprehenderit repudiandae sunt tenetur! Consequatur doloribus eligendi eos.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet molestiae quam quos reiciendis sequi soluta tenetur vel voluptate. Aperiam distinctio exercitationem fugit molestias natus nihil, nisi perspiciatis sint tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto dignissimos enim et eveniet necessitatibus quae! Delectus deleniti eveniet fugiat hic ipsa magnam maxime nam quae, repudiandae suscipit vel?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur assumenda at, beatae dolore dolores ex excepturi in magni modi nisi nostrum nulla qui sapiente temporibus tenetur ullam vero voluptas.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aut deleniti doloribus ducimus, est fugiat hic illum, ipsa laudantium necessitatibus nobis nostrum perferendis reprehenderit tempora veritatis vero vitae voluptates!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi assumenda, aut beatae dolor dolorum eaque, et iusto molestias necessitatibus nisi nostrum optio quam quo reprehenderit repudiandae sint velit?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur distinctio dolor facere in iure laudantium neque officiis, perferendis possimus quis reiciendis saepe sint tenetur voluptas? Fuga iste sequi voluptates?
                    </p>
                </div>
                <div class="last-news flex-column card-shadow">
                    <h3>Недавние новости</h3>
                    <img class="card-shadow" src="../assets/photo-history.jpg" alt="last-news">
                    <img class="card-shadow" src="../assets/last-news-1.png" alt="last-news">
                    <img class="card-shadow" src="../assets/last-news-2.png" alt="last-news">
                </div>

            </div>
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appHeader from "@/components/appHeader";
    import appFooter from "@/components/appFooter";

    export default {
        components: {
            appHeader, appFooter
        },
        name: "appPageNewsId"
    }
</script>

<style scoped>
    .id-news {
        align-items: flex-start;
    }
    .current-news {
        width: 80%;
    }
    .last-news {
        position: relative;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        margin-left: 2rem;
        padding: 1rem 2rem;
        max-width: 25rem;
    }
        .last-news h3 {
            margin: 1rem 0;
            align-self: normal;
        }
        .last-news img {
            width: 100%;
            margin: 1rem 0;
        }
</style>