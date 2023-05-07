import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from 'src/services/guard/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: ':id/:name', component: UserComponent },
      { path: ':id/:name/edit', component: EditComponent },
    ],
  },

  { path: 'categories', component: CategoriesComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
