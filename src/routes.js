
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import ForgatePassword from './components/ForgatePassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import Dashboard from './components/Dashboard.vue';
import notes from './components/notes.vue';
import test from './components/test.vue';
import displayNote from './components/displayNote.vue';
import noteComponent from './components/noteComponent';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/ForgatePassword', component: ForgatePassword },
    { path: '/resetpassword/:token', component: ResetPassword },
    { path: '/dashboard', component: Dashboard },
    { path: '/notes', component: notes },
    { path: '/test',component:test},
    { path: '/displayNote',component:displayNote},
    { path: '/noteComponent',component:noteComponent}
];

export default routes;
