import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createBookForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.createBookForm = this.fb.group({
     title: ['', Validators.compose([Validators.required])],
     img: ['', Validators.compose([Validators.required])],
     description: ['', Validators.compose([Validators.required])],
     date: ['', Validators.compose([Validators.required])],
   }) 
  }

  addParty(): void {
    console.log(this.createBookForm.value);
    
  }
}
