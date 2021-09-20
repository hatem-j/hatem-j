import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { BasePageComponent } from '../../base-page';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import { IOption } from '../../../ui/interfaces/option';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PagePatientProfileComponent extends BasePageComponent implements OnInit, OnDestroy {
  patientInfo: any;
  patientTimeline: any;
  patientForm: FormGroup;
  gender: IOption[];
  status: IOption[];
  currentAvatar: string | ArrayBuffer;
  defaultAvatar: string;
  changes: boolean;
  billings: any[];
  idRouter :number;

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    super(store, httpSv);

    this.pageData = {
      title: 'Information',
      breadcrumbs: [
        {
          title: 'Medicine',
          route: 'default-dashboard'
        },
        {
          title: 'Patients',
          route: 'patients'
        },
        {
          title: 'Dr. Sophie'
        }
      ]
    };
    this.gender = [
      {
        label: 'Commande',
        value: 'male'
      },
      {
        label: 'Devis',
        value: 'female'
      },
      {
        label: 'NA',
        value: 'female'
      }
    ];
    this.status = [
      {
        label: 'Approved',
        value: 'approved'
      },
      {
        label: 'Pending',
        value: 'pending'
      }
    ];
    this.defaultAvatar = 'assets/content/anonymous-400.jpg';
    this.currentAvatar = this.defaultAvatar;
    this.changes = false;
    this.billings = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idRouter = params['id'];
 
      });

    super.ngOnInit();

    this.getData('assets/data/patient-info.json', 'patientInfo', 'loadedDetect');
    this.getData('assets/data/patient-timeline.json', 'patientTimeline');
    this.getData('assets/data/patient-billings.json', 'billings');
  
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  loadedDetect() {
    this.setLoaded();

    this.patientInfo = this.patientInfo.filter(object => {
      return object['id'] == this.idRouter;
    });

    
    this.patientInfo  = this.patientInfo[0];

    this.currentAvatar = this.patientInfo.img;
  

    console.log(this.patientInfo);
    this.initPatientForm(this.patientInfo);
  }

  // init form
  initPatientForm(data: any) {
    this.patientForm = this.formBuilder.group({
      img: [this.currentAvatar],
      name: [data.name, Validators.required],
      number: [data.number, Validators.required],
      address: [data.address, Validators.required],
      PE: [data.PE, Validators.required],
      CAS: [data.CAS, Validators.required],
      Nomf: [data.Nomf, Validators.required],
      Four: [data.Four, Validators.required],
      Lims: [data.Lims, Validators.required],
      SP: [data.SP, Validators.required],
      Type: [data.Type, Validators.required],
      Categorie: [data.Categorie, Validators.required],
      Typedecommande:  [data.Typedecommande, Validators.required],
      Unilog: [data.Unilog, Validators.required],
      Smini:  [data.Smini, Validators.required],
      Quantity:  [data.Quantity, Validators.required],
      TContraintedestockage:  [data.Contraintedestockage, Validators.required],
      Lieuxdestockage:  [data.Lieuxdestockage, Validators.required],
      Etat:  [data.Etat, Validators.required],
      Datemajfds:  [data.Datemajfds, Validators.required],
      Dlvao:  [data.Dlvao, Validators.required],
      R1:  [data.R1, Validators.required],
      R2:  [data.R2, Validators.required],
      FDS:  [data.FDS, Validators.required],
      Remarque:  [data.Remarque, Validators.required],
      Status:  [data.Status, Validators.required],
      
      id: [data.id, Validators.required],
      lastVisit: [data.lastVisit, Validators.required],
      status: [data.status, Validators.required]
    });

    // detect form changes
    this.patientForm.valueChanges.subscribe(() => {
      this.changes = true;
    });
  }

  // save form data
  saveData(form: FormGroup) {
    if (form.valid) {
      this.patientInfo = form.value;
      this.changes = false;
    }
  }

  // upload new file
  onFileChanged(inputValue: any) {
    let file: File = inputValue.target.files[0];
    let reader: FileReader = new FileReader();

    reader.onloadend = () => {
      this.currentAvatar = reader.result;
      this.changes = true;
    };

    reader.readAsDataURL(file);
  }
}
