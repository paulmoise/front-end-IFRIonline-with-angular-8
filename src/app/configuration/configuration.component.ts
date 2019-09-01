import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  title = 'Configuration ';

  reactivForm: FormGroup;
  infoFile : any;
  selectedRadio:number=1;

  get specialite(){
    return this.reactivForm.get('specialite');
  }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }
  ];


  constructor(private fb: FormBuilder) {
    
   }


   ngOnInit(){
    this.reactivForm = this.fb.group({
      type : new FormControl('1'),
      specialite : new FormControl('',Validators.required),
      niveauEtude: new FormControl('',Validators.required)
    });

    
   

    this.reactivForm.get('type').valueChanges
    .subscribe(checkValue=>{
      const specialite = this.reactivForm.get('specialite');
      const niveauEtude = this.reactivForm.get('niveauEtude');
      if(checkValue ==1 ){
          specialite.setValidators(Validators.required);
          niveauEtude.setValidators(Validators.required);
          console.log(specialite.valid)
          console.log(this.reactivForm.valid)
      }else{
          specialite.clearValidators();
          niveauEtude.clearValidators();
          
      }

      specialite.updateValueAndValidity();
      niveauEtude.updateValueAndValidity();

    })
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


  formValidation( control :AbstractControl){

    const type = control.value;
    if(type == 1){
      control.disabled
    }
  }



} 








