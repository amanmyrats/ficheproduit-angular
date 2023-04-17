import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fptype } from 'src/app/chantier/models/fptype.model';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { FptypeService } from 'src/app/chantier/services/fptype.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Country } from 'src/app/shared/models/country.model';
import { Department } from 'src/app/shared/models/department.model';
import { Lot } from 'src/app/shared/models/lot.model';
import { Phase } from 'src/app/shared/models/phase.model';
import { Trade } from 'src/app/shared/models/trade.model';
import { Unit } from 'src/app/shared/models/unit.model';
import { CountryService } from 'src/app/shared/services/country.service';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { LotService } from 'src/app/shared/services/lot.service';
import { PhaseService } from 'src/app/shared/services/phase.service';
import { TradeService } from 'src/app/shared/services/trade.service';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-materialcard-edit',
  templateUrl: './materialcard-edit.component.html',
  styleUrls: ['./materialcard-edit.component.scss']
})
export class MaterialcardEditComponent implements OnInit {
  materialCard: Materialcard;
  materialCardId: string;

  countries: Country[];
  phases: Phase[];
  lots: Lot[];
  fpTypes: Fptype[];
  departments: Department[];
  trades: Trade[];
  units: Unit[];

  materialCardForm: FormGroup;
  originForm: FormGroup;
  manufacturedInForm: FormGroup;
  phaseForm: FormGroup;
  lotForm: FormGroup;
  fpTypeForm: FormGroup;
  departmentForm: FormGroup;
  tradeForm: FormGroup;
  unitForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private materialCardService: MaterialcardService,
    private fb: FormBuilder,
    private countryService: CountryService,
    private phaseService: PhaseService,
    private lotService: LotService,
    private fpTypeService: FptypeService,
    private departmentService: DepartmentService,
    private tradeService: TradeService, 
    private unitService: UnitService, 
    private router: Router, 
  ) {
    this.materialCardForm = this.fb.group({

      id: '',
      number: '',
      slug: '',
      nameEn: '',
      nameFr: '',
      nameRu: '',
      nameTm: '',
      supplierEn: '',
      supplierRu: '',
      locationEn: '',
      locationRu: '',
      descEn: '',
      descFr: '',
      descRu: '',
      descTm: '',
      protocolEn: '',
      protocolRu: '',
      observationEn: '',
      observationRu: '',
      signContractor1: '',
      signContractor2: '',
      signTehnadzor: '',
      signClient: '',
      quantity: '',
      unitPrice: '',
      noteForAchat: '',
      
      // Footer
      zone: '',
      level: '',
      image: '',
      index: '',

      // Sub Forms
      origin: '',
      manufacturedIn: '',
      project: '',
      lot: '',
      fptype: '',
      phase: '',
      department: '',
      trade: '',
      unit: '',
    });

    this.originForm = this.fb.group({
      id: '',
      nameEn: '',
    });

    this.manufacturedInForm = this.fb.group({
      id: '',
      nameEn: '',
    });

    this.phaseForm = this.fb.group({
      id: '',
      code: '',
    });

    this.lotForm = this.fb.group({
      id: '',
      number: '',
      nameEn: '',
      nameFr: '',
    });

    this.fpTypeForm = this.fb.group({
      id: '',
      name: '',
    });

    this.departmentForm = this.fb.group({
      id: '',
      code: '',
    });

    this.tradeForm = this.fb.group({
      id: '',
      nameEn: '',
    });

    this.unitForm = this.fb.group({
      id: '',
      code: '',
    });
  }

  ngOnInit(): void {
    this.materialCardId = this.route.snapshot.params['id'];
    this.getMaterialCard(this.materialCardId);
    this.getSelectOptions();

    // this.patchInitialFormValues();
  }

  onSubmit() {
    this.patchFinalFormValues();
    
    console.log("Submitting");
    console.log(this.materialCardForm.value);
    console.log("Submitting end");

    if (this.materialCardForm.valid) {
      this.materialCardService.updateMaterialcard(this.materialCard.id as unknown as string, this.materialCardForm.value)
        .subscribe({
          next: (materialCard: Materialcard) => {
            console.log("Materialcard was updated successfully");
            console.log(materialCard);
            console.log("Materialcard was updated successfully end");
            this.router.navigate(["/chantier/materialcards/" + this.materialCardId]);
          },
          error: (error: any) => {
            console.log("Error happened when updating MaterialCard");
            console.log(error);
            console.log("Error happened when updating MaterialCard end");
          }
        });

    } else {
      console.log("Form invalid");
      console.log(this.materialCardForm.getError);
    }
  }

  getMaterialCard(id: string): void {
    this.materialCardService.getMaterialcard(id)
      .subscribe({
        next: (materialCard: Materialcard) => {
          console.log('MaterialCard has been retrieved successfully');
          console.log(materialCard);
          this.materialCard = materialCard;
          this.patchInitialFormValues();
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe({
        next: (countries: Country[]) => {
          console.log("Country list was fetched");
          this.countries = countries;
        },
        error: (err: any) => {
          console.log("Error happened when fetching country list");
          console.log(err);
        }
      });
  }

  getPhases(): void {
    this.phaseService.getPhases()
      .subscribe({
        next: (phases: Phase[]) => {
          console.log("Phase list was fetched");
          this.phases = phases;
        },
        error: (err: any) => {
          console.log("Error happened when fetching phase list");
          console.log(err);
        }
      });
  }

  getLots(): void {
    this.lotService.getLots()
      .subscribe({
        next: (lots: Lot[]) => {
          console.log("Lot list was fetched");
          this.lots = lots;
        },
        error: (err: any) => {
          console.log("Error happened when fetching lot list");
          console.log(err);
        }
      });
  }

  getFpTypes(): void {
    this.fpTypeService.getFpTypes()
      .subscribe({
        next: (fpTypes: Fptype[]) => {
          console.log("FpType list was fetched");
          this.fpTypes = fpTypes;
        },
        error: (err: any) => {
          console.log("Error happened when fetching FpType list");
          console.log(err);
        }
      });
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe({
        next: (departments: Department[]) => {
          console.log("Department list was fetched.");
          this.departments = departments;
        },
        error: (error: any) => {
          console.log("Error happened when fetching departments");
          console.log(error);
        }
      });
  }

  getTrades(): void {
    this.tradeService.getTrades()
      .subscribe({
        next: (trades: Trade[]) => {
          console.log("Trade list was fetched.");
          this.trades = trades;
        },
        error: (error: any) => {
          console.log("Error happened when fetching trades");
          console.log(error);
        }
      });
  }

  getUnits(): void {
    this.unitService.getUnits()
      .subscribe({
        next: (units: Unit[]) => {
          console.log("Unit list was fetched.");
          this.units = units;
        },
        error: (error: any) => {
          console.log("Error happened when fetching units");
          console.log(error);
        }
      });
  }

  patchInitialFormValues(): void {
    this.materialCardForm.patchValue(this.materialCard);
    this.originForm.patchValue(this.materialCard.origin!);
    this.manufacturedInForm.patchValue(this.materialCard.manufacturedIn!);
    this.phaseForm.patchValue(this.materialCard.phase!);
    this.lotForm.patchValue(this.materialCard.lot!);
    this.fpTypeForm.patchValue(this.materialCard.fptype!);
    this.departmentForm.patchValue(this.materialCard.department!);
    this.tradeForm.patchValue(this.materialCard.trade!);
    this.unitForm.patchValue(this.materialCard.unit!);
    console.log("done patching");
  }

  patchFinalFormValues(): void {
    
    if (this.departmentForm.controls['id'].value) {
      this.materialCardForm.get('department')?.setValue(this.departmentForm.value);
    } else {
      this.materialCardForm.get('department')?.setValue(null);
    }

    if (this.originForm.controls['id'].value) {
      this.materialCardForm.get('origin')?.setValue(this.originForm.value);
    } else {
      this.materialCardForm.get('origin')?.setValue(null);
    }

    if (this.manufacturedInForm.controls['id'].value) {
      this.materialCardForm.get('manufacturedIn')?.setValue(this.manufacturedInForm.value);
    } else {
      this.materialCardForm.get('manufacturedIn')?.setValue(null);
    }

    if (this.lotForm.controls['id'].value) {
      this.materialCardForm.get('lot')?.setValue(this.lotForm.value);
    } else {
      this.materialCardForm.get('lot')?.setValue(null);
    }

    if (this.fpTypeForm.controls['id'].value) {
      this.materialCardForm.get('fpType')?.setValue(this.fpTypeForm.value);
    } else {
      this.materialCardForm.get('fpType')?.setValue(null);
    }

    if (this.phaseForm.controls['id'].value) {
      this.materialCardForm.get('phase')?.setValue(this.phaseForm.value);
    } else {
      this.materialCardForm.get('phase')?.setValue(null);
    }

    if (this.tradeForm.controls['id'].value) {
      this.materialCardForm.get('trade')?.setValue(this.tradeForm.value);
    } else {
      this.materialCardForm.get('trade')?.setValue(null);
    }

    if (this.unitForm.controls['id'].value) {
      this.materialCardForm.get('unit')?.setValue(this.unitForm.value);
    } else {
      this.materialCardForm.get('unit')?.setValue(null);
    }
  }

  getSelectOptions(): void {
    this.getCountries();
    this.getPhases();
    this.getLots();
    this.getFpTypes();
    this.getDepartments();
    this.getTrades();
    this.getUnits();
  }

}
