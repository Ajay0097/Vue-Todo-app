import Header from './components/Header.js'
import TodoUserData from './components/TodoUserData.js'
import End from './components/End.js'
import endd from './components/endd.js'




export default
[
    {
        path:'/',
        component: Header
    },
    {
        path:'/TodoUserData/:title',
        component: TodoUserData,
        name : 'TodoUserData'
    },
    {
        path:'/End',
        component: End
    },
    {
        path:'/Endd',
        component: endd
    }
   
]
    