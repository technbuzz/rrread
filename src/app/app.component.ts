import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, IonApp, IonRouterOutlet, IonApp, IonRouterOutlet, IonApp, IonRouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'testng';
}
