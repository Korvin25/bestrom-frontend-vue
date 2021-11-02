<template>
    <div class="desktop-section job-item flex-row card-shadow">
        <img :src="require(`../assets/${image}`)" alt="job image">
        <div class="flex-column job-item-description">
            <h4>{{ title }}</h4>
            <h5>Основные требования:</h5>
            <p>{{ requirements }}</p>
            <h5>Основные навыки:</h5>
            <p>{{ skills }}</p>
        </div>
        <div class="flex-column job-item-pay">
            <h4>Заработная плата</h4>
            <p>{{ pay }}</p>
            <router-link :to="{ name: 'appPageJobId', params: { jobId: this.id } }">
                <button @click="scrollToTop" class="btn">Подробнее</button>
            </router-link>
        </div>
    </div>
    <!-- ./desktop-section -->
</template>

<script>
    export default {
        props: {
            id: String,
            title: String,
            requirements: String,
            skills: String,
            pay: String,
            image: String
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
        },
        name: "appJobItem"
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
        justify-content: space-between;
    }
        .job-item-pay h4 {
            margin: 0;
        }
        .job-item-pay p {
            text-align: center;
            line-height: normal;
            font-size: 2.5rem;
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
    }
</style>