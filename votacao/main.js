const submissionComponent = {
    template: `
                <div style="display: flex; width: 100%">
                    <figure class="media-left">
                        <img class="image is-64x64"
                             v-bind:src="cerveja.submissionImage">
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>
                                    <a v-bind:href="cerveja.url" class="has-text-info">{{ cerveja.title }}</a>
                                    <span class="tag is-small">#{{ cerveja.id }}</span>
                                </strong>
                                <br>
                                {{ cerveja.description }}
                                <br>
                                <small class="is-size-7">
                                    Enviado por:
                                    <img class="image is-24x24" v-bind:src="cerveja.avatar">
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="media-right">
                        <span class="icon is-small" v-on:click="upvote(cerveja.id)">
                        <i class="fa fa-chevron-up"></i>
                        <strong class="has-text-info">{{ cerveja.votes }}</strong>
                        </span>
                    </div>
                </div>
                `,
    props: ['cerveja','cervejas'],
    methods: {
        upvote(cervejaId) {
            const cerveja = this.cervejas.find(cerveja => cerveja.id === cervejaId);
            cerveja.votes++;
        }
    }
};

new Vue({
    el: '#app',
    data: {
        cervejas: Seed.cervejas
    },
    computed: {
        sortedCervejas () {
            return this.cervejas.sort((a,b) => {
                return b.votes - a.votes
                });
        }
    },
    components: {
        'submission-component': submissionComponent
    }
});

