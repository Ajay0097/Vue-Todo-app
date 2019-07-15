
var item=
{

    props:['ti'],

    data()
    {
        return{
            
        }
    },
    methods: {
       
    },
    template:
    `
    <div class="container-fluid">
    <div class="text-center bg-dark p-3">
    <h1 class="text-info mt-1">{{ti}}</h1>
    </div>
    </div>
    `
};
var item2 = 
{
    props:['todo_data'],
    data()
    {
        return{
            demodata: "helloooooo"
        }
    },
    methods: {
        demo(){
            alert("hi");
        },
        calldata:function(index)
        {
            
            // this.$refs.onclick = this.Deletedata(index)
            this.$emit('parent',index)
        }
    },
    template:
    `
    <div>
    <ul class="text-center text-success">
        <div v-for="(item,index) in todo_data.list">
            <h6 class="d-flex offset-md-5 align-text-top" >{{item.item}}</h6>
            <button class="btn btn-danger  d-flex offset-md-8 btn-sm mt-2"  @click="calldata(index)">DELETE</button>
        </div>
    </ul >
    </div>
      `
}

export default
{ 
    data() {
       
        return {
            todo_data:[],
            
            this_Heading : this.$route.params.title
        }
    },
    components:
    {
        'app-titles':item,
        'app-todo-list': item2
    },
    created()
    {
        var this_title = this.$route.params.title;
        var _this = this;
        axios.get("http://localhost:3000/todo?title=" + this_title)
            .then(function (response) {
                 _this.todo_data = response.data[0];
  })
    },
    methods: {
        Deletedata:function(index)
        {
                confirm('Are you sure you want to delete')
                this.todo_data.list.splice(index,1)
        }
        
        
    },
    template:`
    <div>
    <app-titles v-bind:ti="this_Heading"></app-titles>
        <div class="container" >
        <app-todo-list :todo_data="todo_data" v-on:parent="Deletedata"></app-todo-list>
       
        </div>
       
    </div>
    `
}