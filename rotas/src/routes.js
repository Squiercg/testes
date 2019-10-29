// routes.js
import Home from './components/Home.vue';
import listaPostagens from "./components/listaPostagens";
import lerPostagem from "./components/lerPostagem";
import criaPostagem from "./components/criaPostagem";
import editaPostagem from "./components/editaPostagem";

const routes = [
    { path: '/', component: Home },
    { path: '/listapostagens', component: listaPostagens },
    { path: '/lerpostagem/:id', component: lerPostagem },
    { path: '/criapostagem', component: criaPostagem },
    { path: '/editapostagem', component: editaPostagem },
];

export default routes;