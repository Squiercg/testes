<template>
    <div>
        <section v-if="errored">
            <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
        </section>

        <section v-else>
            <div v-if="loading">Carregando...</div>

            <div>
            <p>Postagem: {{ postagem.id }}</p>
            <h2>Título: {{postagem.title}}</h2>
            <p>Texto: {{postagem.body}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from "axios/dist/axios.js";

    export default {
        name: "lerPostagem",
        data () {
            return {
                postagem: null,
                loading: true,
                errored: false
            }
        },
        mounted() {
            axios
                .get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
                .then(response => (
                        this.postagem = response.data
                    )
                )
                .catch(window.console.log("Entrou no Catch"),
                    error => {
                        window.console.log("Entrou no Erro")
                        window.console.log(error)
                        this.errored = true
                    })
                .finally(
                    () => this.loading = false
                )
        }
    }

</script>

<style scoped>

</style>