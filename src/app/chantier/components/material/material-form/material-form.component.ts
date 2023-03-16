import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Material } from '../../../models/material-class.model';
import { MaterialService } from '../../../services/material.service';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  file: File;
  @Input() title: string;
  @Input() currentMaterial: Material;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  materialFormGroup: FormGroup;
  id: string;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.materialFormGroup = this.fb.group({
      image: null,
      nameEn: [''],
      nameFr: [''],
      nameRu: [''],
      nameTm: [''],
      descEn: [''],
      descFr: [''],
      descRu: [''],
      descTm: [''],
    });

    // Edit Mode will have formData.
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;

      this.materialService.getMaterial(this.id)
      .subscribe(material => {
        material.image = "";
        this.materialFormGroup.patchValue(material)
      });
    }
  }

  submit() {
    if (this.materialFormGroup.valid) {
      console.log("sending " + this.materialFormGroup.value);
      console.log(this.materialFormGroup.value);
      this.onSubmit.emit(this.materialFormGroup.value);
    }
  }

  cancel() {
    this.onCancel.emit();
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }
}
