<template>
    <div class="catalog-type-select">
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        },
        name: "appCatalogTypeSelect"
    }
</script>

<style scoped>
    .catalog-type-select {
        transition: all .5s;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        margin: 0.2rem;
        text-wrap: none;
        border: 1px solid #2FC1FF;
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
    }
    .catalog-type-select:hover {
        transition: all .5s;
        color: #FFFFFF;
        cursor: pointer;
        background: #2FC1FF;
        border: 1px solid #2FC1FF;
        box-sizing: border-box;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }
</style>