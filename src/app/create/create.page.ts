import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { addIcons } from "ionicons";
import { trash, add } from "ionicons/icons";
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  private id: string
  public createBookForm: UntypedFormGroup
  public newEntry: Boolean = true
  private subscription: Subscription = new Subscription()

  #firestore = inject(Firestore)

  constructor(
    private fb: UntypedFormBuilder,
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
    // const readingCol = collection(this.#firestore, `readings/${this.id}`)
    const readingCol = collection(this.#firestore, 'readings')

    if (this.id !== 'new') {
      this.newEntry = false
      const docRef = doc(this.#firestore, `readings/${this.id}`)
      this.subscription = docData(docRef).pipe(
      )

        // @ts-ignore
        .subscribe(resp => {
          console.log(resp)
          this.createBookForm.patchValue(resp)
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
            this.subscription.unsubscribe()
            // this.afs.collection('readings').doc(this.id).delete().then(() => {
            //     this.router.navigateByUrl('/')
            // })
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
