import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  userForm: FormGroup;
  listData: any;



  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({


      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Contactno: ['', Validators.required],
      Gender: ['', Validators.required]


    })

  }

  public addItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();

  }
  reset() {
    this.userForm.reset();

  }

  removeItem(element: any) {

    this.listData.forEach((value: any, index: any) => {

      if (value == element)
        this.listData.splice(index, 1);
    })

  }

  ngOnInit(): void {

  }

}
