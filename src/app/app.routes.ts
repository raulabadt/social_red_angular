import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'post', component: PostComponent },
    { path: 'comments', component: CommentsComponent }
];
