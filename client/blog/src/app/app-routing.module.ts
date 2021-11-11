import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';

import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { PostComponent } from './components/blog/post/post.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/:id', component: PostComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: PublicLayoutComponent,
    children: [{ path: 'profile', component: ProfileComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
