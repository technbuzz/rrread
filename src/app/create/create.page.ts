import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { addIcons } from "ionicons";
import { trash, add } from "ionicons/icons";
import { Firestore, collection, collectionData, deleteDoc, doc, docData } from '@angular/fire/firestore';
import { Book } from '../models/book';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/angular/standalone";
import { FirebaseDatePipe } from '../shared/fbDate.pipe';

@Component({
  selector: 'app-create',
  imports: [ ReactiveFormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonFab, IonFabButton, IonIcon, FirebaseDatePipe, ],
  standalone: true,
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [FirebaseDatePipe]
})
export class CreatePage implements OnInit, OnDestroy {
  private id: string
  public createBookForm: UntypedFormGroup
  public newEntry: Boolean = true
  private subscription: Subscription = new Subscription()

  router = inject(Router)
  #firestore = inject(Firestore)
  readingsCol = collection(this.#firestore, 'readings')

  constructor(
    private fb: UntypedFormBuilder,
    private fbDate: FirebaseDatePipe,
    private alertController: AlertController,
    private route: ActivatedRoute) {

    this.id = this.route.snapshot.params['id']
    this.createBookForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      img: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
    })
    addIcons({ trash, add });
  }

  ngOnInit() {
    if (this.id !== 'new') {
      this.newEntry = false
      const docRef = doc(this.#firestore, `readings/${this.id}`)
      this.subscription = docData<Book>(docRef).pipe(
      )

        // @ts-ignore
        .subscribe(resp => {
          console.log(resp)
          

          const data = {...resp, date: this.fbDate.transform(resp.date) };
          this.createBookForm.patchValue(data)
        })
    }
  }

  addParty(): void {
    console.log(this.createBookForm.value);
    // if (this.newEntry) {
    //     this.afs.collection('readings').add(this.createBookForm.value).then(_ => this.router.navigateByUrl(''))
    // } else {
    //     this.afs.collection('readings').doc(this.id).update(this.createBookForm.value).then(_ => this.router.navigateByUrl(''))
    //
    // }
  }

  async delete(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete a document?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            const docRef = doc(this.#firestore, `readings/${this.id}`)
            deleteDoc(docRef).then(() => {
              this.subscription.unsubscribe()
              this.router.navigateByUrl('/')
            })
          }
        }
      ]
    })

    await alert.present()
  }

  fake(): void {
    if (this.newEntry) {
      this.createBookForm.setValue({
        title: 'Dummy Book',
        description: 'Dummy Book Long descriptions',
        img: 'https://picsum.photos/200/300',
        date: 'July 21'
      })
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
