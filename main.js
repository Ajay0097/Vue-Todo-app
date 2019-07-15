import Vue from './vue.js'
import Todo from './components/Todo.js'
import Header from './components/Header.js'
import TodoUserData from './components/TodoUserData.js'
import Routes from './Routes.js'
import End from './components/End.js'
import endd from './components/endd.js'



export const Bus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({

    routes: Routes
    // mode:'history'
 
});
var app = new Vue({
    el:'#app',
    router,
    data() {
        return {

        }
    },
    created(){
        Bus.$on('tryAlert',(data)=>{
            alert("The Alert From a Component")
        })
    },
    components:
    {
        'app-header':Header,
        'app-todouserdata':TodoUserData,
        'app-Todo':Todo,
        'app-End':End,
        'app-end':endd

    }
})