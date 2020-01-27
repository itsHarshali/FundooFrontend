
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import ForgatePassword from './components/ForgatePassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import Dashboard from './components/Dashboard.vue';
import notes from './components/notes.vue';
import trash from './components/trash.vue';
// import displayNote from './components/displayNote.vue';
// import noteComponent from './components/noteComponent';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/ForgatePassword', component: ForgatePassword },
    { path: '/resetpassword/:token', component: ResetPassword },
    { path: '/dashboard', component: Dashboard,
        children:[
            {path:'', redirectTo:'/notes', pathMatch:'full'},
            {path:'notes',component: notes},
            // {path:'editnote',component: EditnoteComponent},
            // {path:'remainder',component: RemainderComponent},
            {path:'trash',component: trash}
            // {path:'edittrash',component: EditTrashComponent},
            // {path:'archive',component: ArchiveComponent},
            // {path:'search',component: SearchComponent}
            ]},

    // { path: '/notes', component: notes },
    // { path: '/displayNote',component:displayNote},

];

export default routes;
