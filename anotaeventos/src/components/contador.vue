<template>
    <div>
        <p>Número de notas: {{ contagem }}</p>
    </div>
</template>

<script>
    export default {
        name: "contador",
        props: ['contagem']
    }
</script>

<style scoped>

</style>