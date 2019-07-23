import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { EmailBoxComponent } from '../email-box/email-box.component';
import { SideUiComponent } from '../side-ui/side-ui.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { ButtonHighlightDirective } from '../button-highlight.directive';
import { SearchHighlightDirective } from '../search-highlight.directive';
import { NewMessageUiComponent } from '../new-message-ui/new-message-ui.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Welcome Home'
        }
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        EmailBoxComponent,
        SideUiComponent,
        SearchBarComponent,
        ButtonHighlightDirective,
        SearchHighlightDirective,
        NewMessageUiComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule {}