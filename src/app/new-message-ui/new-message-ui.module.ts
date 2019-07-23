import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessageUiComponent } from './new-message-ui.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: NewMessageUiComponent,
        data: {
          title: 'New Message'
        }
    }
];

@NgModule({
    declarations: [NewMessageUiComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class NewMessageUiModule {}