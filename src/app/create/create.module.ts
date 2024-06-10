import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/angular/standalone";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CreatePageRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonDatetime,
        IonButton,
        IonFab,
        IonFabButton,
        IonIcon
    ],
    declarations: [CreatePage]
})
export class CreatePageModule { }
