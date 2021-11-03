import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../sharedservice/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  value: boolean = true;

  doFunction() {
    this.value = !this.value;
  }
  user: any;

  deleteuser(data: any) {
    const index = this.user.findIndex(
      (userId: { id: any }) => userId.id === data.id
    );
    if (index >= 0) {
      this.user.splice(index, 1);
    }
    this.service.deleteuser(data.id).subscribe(res => {
      alert('User Deleted');
    });
  }
  edituser(data: any) {
    this.service.set(data);
    this.router.navigate(['adduser']);
  }

  ngOnInit(): void {
    this.service.getuser().subscribe(res => {
      this.user = res;
    });
  }
}
