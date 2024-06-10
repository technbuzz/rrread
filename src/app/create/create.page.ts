import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
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
  constructor(private fb: UntypedFormBuilder,private alertController: AlertController, private afs: AngularFirestore, private route: ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.params.id   
    this.createBookForm = this.fb.group({
     title: ['', Validators.compose([Validators.required])],
     img: ['', Validators.compose([Validators.required])],
     description: ['', Validators.compose([Validators.required])],
     date: ['', Validators.compose([Validators.required])],
   }) 
  }

  ngOnInit() {
    if(this.id !== 'new') {
      this.newEntry = false 
      this.subscription = this.afs.doc(`readings/${this.id}`)
      .valueChanges()
      .subscribe(resp => {
        this.createBookForm.setValue(resp)
      })
    } 
  }

  addParty(): void {
    console.log(this.createBookForm.value);
    if(this.newEntry) {
      this.afs.collection('readings').add(this.createBookForm.value).then(_ => this.router.navigateByUrl(''))    
    } else {
      this.afs.collection('readings').doc(this.id).update(this.createBookForm.value).then(_ => this.router.navigateByUrl(''))    

    }
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
            this.afs.collection('readings').doc(this.id).delete().then(() => {
              this.router.navigateByUrl('/')
            })
          }
        }
      ]
    })

    await alert.present()
  }

  fake (): void {
    if(this.newEntry) {
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
