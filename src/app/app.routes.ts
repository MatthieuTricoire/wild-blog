import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticleComponent } from './pages/article/article.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '**', component: NotFoundComponent },
];
