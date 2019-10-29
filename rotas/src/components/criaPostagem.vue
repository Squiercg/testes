<template>
    <div>

        <section v-if="errored">
            <p>Não foi possivel criar a postagem</p>
        </section>

        <input v-model="message" placeholder="mensagem vazia">
        <p>A mensagem é: {{ message }}</p>


        <input v-model="title" placeholder="tittle">
         <br/>
        <input v-model="body" placeholder="body">

        <br/>

        <button style="font-size:24px" v-on:click="criapost()" >Cria a postagem <i class="fa fa-save"></i></button>
        <br/><br/>

        <button v-on:click="adicionaum()">Adiciona 3</button>
        <p>Quantas vezes o botão acima foi clicado: {{ counter }}</p>

    </div>
</template>

<script>
    import axios from "axios/dist/axios.js";

    export default {
        name: "criaPostagem",
        data () {
            return {
                message: "",
                title: "",
                body: "",
                loading: true,
                errored: false,
                counter: 0
            }
        },
        mounted() {

        },
        methods: {
            adicionaum: function() {
                this.counter=this.counter+3;
            },
            criapost: function () {
                axios
                    .post('https://jsonplaceholder.typicode.com/posts',
                        {
                        title: this.title,
                        body: this.body,
                        userId: 1
                        },
                        {
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        })
                    .catch(error => {
                        window.console.log(error)
                        this.errored = true
                    })
                    .finally(
                        () => {
                            this.loading = false,
                            this.title= "",
                            this.body= ""
                        });

            }
        }
    }
</script>

<style scoped>

</style>