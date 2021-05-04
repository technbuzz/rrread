import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  private id: string
  public createBookForm: FormGroup
  constructor(private fb: FormBuilder, private afs: AngularFirestore, private route: ActivatedRoute, private router: Router) { 
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
}
