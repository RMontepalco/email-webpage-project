import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
          title: 'Log in here, bruv'
        }
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LoginModule {}