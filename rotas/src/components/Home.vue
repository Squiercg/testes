<template>
    <div>

        <p>load: {{ load }}</p>

        <h4>Contagem do Vuex</h4>

        <p>{{ count }}</p>
        <p>
            <button v-on:click="increment">+</button>
            <button v-on:click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            count () {
                return this.$store.state.count
            },
            load() {
                return this.$store.state.loading
            }
        },
        methods: {
            increment () {
                this.$store.commit('increment')
            },
            decrement () {
                this.$store.commit('decrement')
            }
        }
    }
</script>

<style scoped>

</style>