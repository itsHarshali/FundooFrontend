
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import ForgatePassword from './components/ForgatePassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import Dashboard from './components/Dashboard.vue';
// import notes from './components/notes.vue';
import trash from './components/trash.vue';
import archive from './components/archive.vue';
import noteComponent from './components/noteComponent';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/ForgatePassword', component: ForgatePassword },
    { path: '/resetpassword/:token', component: ResetPassword },
    // { path: '/trash', component: trash },
    // { path: '/archive', component: archive },
    { path: '/dashboard', component: Dashboard,
        children:[
           {path:'', redirectTo:'/dashboard',component: noteComponent},
            {path:'/notes',component: noteComponent},
            {path:'/trash',component: trash},
            {path:'/archive',component: archive},
            // {path:'editnote',component: EditnoteComponent},
            // {path:'remainder',component: RemainderComponent},

            // {path:'edittrash',component: EditTrashComponent},
            // {path:'archive',component: ArchiveComponent},
            // {path:'search',component: SearchComponent}
            ]},

    // { path: '/notes', component: notes },
    // { path: '/displayNote',component:displayNote},

];

export default routes;
