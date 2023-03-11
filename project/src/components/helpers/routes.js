import Home from '../../components/pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Dashboard from '../pages/Dashboard'
import News from '../pages/News'
import User from '../pages/User'

export const routes = [
    {
        id: 1,
        path: '/',
        components: <Home/>
    },
    {
        id: 2,
        path: '/dashboard',
        components: <Dashboard/>
    },
    {
        id: 3,
        path: '/contacts',
        components: <Contacts/>
    },
    {
        id: 4,
        path: '/news',
        components: <News/>
    },
    {
        id: 5,
        path: '/user',
        components: <User/> 
    },
    {
        id: 6,  
        path: '/about',
        components: <About/>
    },
    {
        id: 7
    }
]