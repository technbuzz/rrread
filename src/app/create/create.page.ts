import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  private id: string
  public createBookForm: FormGroup
  constructor(private fb: FormBuilder,private alertController: AlertController, private afs: AngularFirestore, private route: ActivatedRoute, private router: Router) { 
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
      
      this.afs.doc(`readings/${this.id}`)
      .valueChanges()
      .subscribe(resp => {
        this.createBookForm.setValue(resp)
      })
    } 
  }

  addParty(): void {
    console.log(this.createBookForm.value);
    if(this.id === 'new') {
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
            this.afs.collection('readings').doc(this.id).delete().then(() => {
              this.router.navigateByUrl('/')
            })
          }
        }
      ]
    })

    await alert.present()
  }
}
