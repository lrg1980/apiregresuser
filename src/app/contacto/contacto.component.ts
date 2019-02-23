import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor( private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
   }

   onSubmit() {
     this.submitted = true;

     if (this.messageForm.invalid) {
       return;
     }

     this.success = true;
   }

  ngOnInit() {
  }

}
