import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../sharedservice/api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   mobile: new FormControl(''),
  //   salary: new FormControl('')
  // });

  constructor(private formbuilder: FormBuilder, private service: ApiService) {}
  profileForm = this.formbuilder.group({
    name: [''],
    email: [''],
    mobile: [''],
    salary: ['']
  });
  user: any;
  value: boolean = false;
  submit() {
    this.service.postuser(this.profileForm.value).subscribe();
  }
  get() {
    this.value = !this.value;
    console.warn((this.user = this.service.get()));
    this.profileForm.controls['name'].setValue(this.user.name);
    this.profileForm.controls['email'].setValue(this.user.email);
    this.profileForm.controls['mobile'].setValue(this.user.mobile);
    this.profileForm.controls['salary'].setValue(this.user.salary);
  }
  updateuser() {
    this.service.updateuser(this.user.id, this.profileForm.value).subscribe();
  }

  ngOnInit(): void {
    this.get();
  }
}
