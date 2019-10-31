// routes.js
import Home from './components/Home.vue';
import listaPostagens from "./components/listaPostagens";
import lerPostagem from "./components/lerPostagem";
import criaPostagem from "./components/criaPostagem";
import editaPostagem from "./components/editaPostagem";
import listaPostagensVuex from "./components/listaPostagensVuex";

const routes = [
    { path: '/', component: Home },
    { path: '/listapostagens', component: listaPostagens },
    { path: '/lerpostagem/:id', component: lerPostagem },
    { path: '/criapostagem', component: criaPostagem },
    { path: '/editapostagem/:id', component: editaPostagem },
    { path: '/listapostagensvuex', component: listaPostagensVuex },
];

export default routes;