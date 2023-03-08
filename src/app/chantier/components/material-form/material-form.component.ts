import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent {
  file: File | null = null;

  constructor (private fb: FormBuilder){}
  materialForm = this.fb.group({
    image : null,
    nameEn : [''], 
    nameFr : [''], 
    nameRu : [''], 
    nameTm : [''], 
    descEn : [''], 
    descFr : [''], 
    descRu : [''], 
    descTm : [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.materialForm.value);
  }

  onChange(event: any){
    this.file = event.target.files[0];
  }



}
