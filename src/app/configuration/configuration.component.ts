import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  title = 'Configuration ';

  reactivForm: any = FormGroup;
  infoFile : any;
  selectedRadio:number=1;

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }
  ];


  constructor(private fb: FormBuilder) {
    this.reactivForm = fb.group({
      type : new FormControl('1', Validators.required),
      specialite : new FormControl('', Validators.required),
      niveauEtude: new FormControl('1', Validators.required)
    });
   }

   saveForm(submitForm: FormGroup){
     if(submitForm.valid){
       const dto = submitForm.value;
       const formData =new FormData();
       formData.append('dto', dto);
       formData.append('file', this.infoFile);
     }
   }

   onChange(event){
    const file = event[0];
    console.log(file)
    this.infoFile = file;

   }
  
   pickFiles(){
      document.getElementById('file').click();
   }

  onChangeRadio(event){
    this.selectedRadio = event.value;
  }

   validateFormFields(submitForm: FormGroup) {
    Object.keys(submitForm.controls).forEach(field => {
      const control = submitForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
  }

  onClear(){

  }

  ngOnInit(): void {
   
  }

} 








