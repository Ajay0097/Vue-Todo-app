import Todo from './Todo.js'
export default
{
    data() {
        return {
            
            
        }
    },
    components:
    {
        name:Todo,
        'app-todo':Todo
    },
    template:`
        <div>
            <h1 class="text-center text-info mt-4">Todo</h1>
            <app-todo class="col-md-6 col-sm-6 offset-md-5"></app-todo>
        </div>
    `
    
};
