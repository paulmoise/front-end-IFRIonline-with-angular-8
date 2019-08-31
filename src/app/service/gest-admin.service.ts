import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestAdminService {

   BASE_URL:string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  getSpcialites():Observable<any>{
    return this.http.get(this.BASE_URL+'/specialites');
  }

  getNiveauEtude():Observable<any>{
    return this.http.get(this.BASE_URL+'/niveauEtudes');
  }

  getMatieres():Observable<any>{
    return this.http.get(this.BASE_URL+'/matieres');
  }

  getMatieresByEnseignant():Observable<any>{
    return this.http.get(this.BASE_URL+'/matieres');
  }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }











  






  
}
