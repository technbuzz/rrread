import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonFab, IonFabButton, IonIcon } from "@ionic/angular/standalone";
import { FirebaseDatePipe } from '../shared/fbDate.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    FirebaseDatePipe,
        HomePageRoutingModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonThumbnail,
        IonLabel,
        IonFab,
        IonFabButton,
        IonIcon
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
