import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { SessionComponent } from './session/session.component';
import { HomepageComponent } from './homepage/homepage.component';
export const routes: Routes = [
    { path: '', component: LoginComponent  },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'post', component: PostComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'iniciar', component: SessionComponent },
    { path: 'homepage', component: HomepageComponent }
];
