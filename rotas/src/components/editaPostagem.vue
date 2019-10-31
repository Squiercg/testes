<template>
    <div>
        <section v-if="errored">
            <p>Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
        </section>

        <section v-else>
            <div v-if="loading">Carregando...</div>

            <div>
                <p>Postagem: {{ postagem.id }}</p>

                <div>
                    <h3>Título</h3>
                    <input v-model="title" size="50">
                </div>

                <div>
                    <h3>Texto</h3>
                    <textarea v-model="body" rows="6" cols="50"></textarea>
                </div>

                <div>
                    <button style="font-size:24px" v-on:click="editapost(postagem.id)" >Salva edição <i class="fa fa-save"></i></button>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
    import axios from "axios/dist/axios.js";

    export default {
        name: "editaPostagem",
        data () {
            return {
                postagem: null,
                loading: true,
                errored: false,
                title: "",
                body: "",
            }
        },
        mounted() {
            axios
                .get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
                .then(response => (
                    this.postagem = response.data,
                            this.title = this.postagem.title,
                        this.body = this.postagem.body


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
            editapost: function(id) {
                window.console.log("Entrou no editapostagem: " + id)
                axios({
                    method: 'put',
                    url: 'https://jsonplaceholder.typicode.com/posts/'+id,
                    data: {
                        id: id,
                        title: this.title,
                        body: this.body,
                        userId: 1
                    }
                });
                this.$router.push({path:'/lerpostagem/'+id})
            }
        }
    }
</script>

<style scoped>

</style>