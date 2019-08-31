import { Component, OnInit } from '@angular/core';
import { GestAdminService } from '../service/gest-admin.service';

@Component({
  selector: 'app-gest-admin',
  templateUrl: './gest-admin.component.html',
  styleUrls: ['./gest-admin.component.css']
})
export class GestAdminComponent implements OnInit {

  title:string = 'Gestion des Administrateurs';

  constructor(private service:GestAdminService) { }

  ngOnInit() {
  }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  


  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }












  


}
