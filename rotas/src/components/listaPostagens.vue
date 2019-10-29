<template>
    <div>
        <section v-if="errored">
            <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
        </section>

        <section v-else>
            <div v-if="loading">Carregando...</div>
            <ul>
                <li v-for="postagem in postagens" v-bind:key="postagem.id">

                    {{postagem.title}}
                    <router-link v-bind:to="'/lerpostagem/'+postagem.id"><i class="fa fa-eye"></i></router-link>
                    <i class="fa fa-edit"></i>
                    <i class="fa fa-trash-o"  v-on:click="deletapost(postagem.id)" ></i>


                </li>
            </ul>
        </section>

    </div>
</template>

<script>
    import axios from "axios/dist/axios.js";

    export default {
        name: "listaPostagens",
        data () {
            return {
                postagens: null,
                loading: true,
                errored: false
            }
        },
        created() {

        },
        mounted() {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => (
                    this.postagens = response.data
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
        },
        methods: {
            deletapost: function(id) {
                window.console.log("Entrou no deletapost: " + id)
                axios({
                    method: 'delete',
                    url: 'https://jsonplaceholder.typicode.com/posts/'+id,
                    data: {
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>