import {Bus} from '../main.js'
export default
{
    data() {
        return {
        
            
            todolist:[],
            Todolist:'',
            message:'',
            
        }
    },
    created()
    {
        
        var _this = this;
        axios.get('http://localhost:3000/todo')
            .then(function (response) {
                _this.todolist = response.data;
  })
    },
    methods:
    {
        Addtolist: function()
        {
            this.message = this.Todolist,
            this.todolist.push({title:this.message});
            axios.post('http://localhost:3000/todo', {
                title: this.message})
              .then((resp) => {
                this.Todolist = ''
              })
            
        },
        change:function()
        {
             Bus.$emit('tryAlert','The Alert')
             
        }
    },
    template:`
        <div class="container">
            <input type="text" v-model="Todolist" placeholder="Todo" @keyup.enter="Addtolist">
             
                <ul v-if="todolist.length!=0">
                <li v-for="todo in todolist">
                <router-link :to="'/TodoUserData/'+todo.title">
                {{todo.title}}
                </router-link>
                </li>
                </ul>
                <button @click="change">Click Me</button>
        </div>
    `
}