<style scoped>
    .main-component {
        margin: 5px auto;
        font-family: sans-serif;
        background-color: #f7d3cc;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }
</style>

<template>
    <div class="main-component">
        <p>This is your component-b in Vue</p>
        <p><b>{{ text }}</b></p>
    </div>
</template>

<script>
    export default {
        data: () => ({
            text: 'Powered by webpack!',
        })
    }
</script>
