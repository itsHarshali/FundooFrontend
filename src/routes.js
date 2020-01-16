
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import ForgatePassword from './components/ForgatePassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import Dashboard from './components/Dashboard.vue';


const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/ForgatePassword', component: ForgatePassword },
    { path: '/resetpassword/:token', component: ResetPassword },
    { path: '/dashboard', component: Dashboard },

];

export default routes;
