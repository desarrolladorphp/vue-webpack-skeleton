<style scoped>
    .main-component {
        margin: 5px auto;
        font-family: sans-serif;
        background-color: #ccf7e2;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }
</style>

<template>
    <div class="main-component">
        <p>This is your component-a in Vue</p>
        <p><b>{{ text }}</b></p>
        <component-b v-if="componentB"></component-b>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data: () => ({
            text: 'Powered by webpack!',
        }),
        props: {
            componentB: false
        }
    }
</script>
