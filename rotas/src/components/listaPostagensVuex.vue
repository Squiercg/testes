<template>
    <div>
        <div v-if="loading">
            loading...
        </div>
        <div v-else>
            {{ loading }}

            <ul>
                <li v-for="post in posts" v-bind:key="post.id">
                    <h1>
                        {{post.title}}
                    </h1>
                    <p>
                        {{post.body}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "listaPostagensVuex",
        computed: mapState(['posts','loading']),
        created() {
            //console.log(this.$store)
            this.$store.dispatch('loadData') // dispatch loading
        }
    }
</script>

<style scoped>

</style>