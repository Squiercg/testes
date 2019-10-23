<template>
    <div>
        <input v-model="input" :placeholder="placeholder" @keyup.enter="monitorEnterKey" class="input is-small" type="text" />
    </div>
</template>

<script>
    import { store } from '../store.js';

    export default {
        name: "entrada",
        props: ['placeholder'],
        data () {
            return {
                sharedState: store.state,
                input: ''
            }
        },
        methods: {
            monitorEnterKey() {
                store.setNota(this.input);
                this.$emit("novaContagem",store.getContagem());
                this.input = '';

            }
        }
    }
</script>

<style scoped>

</style>