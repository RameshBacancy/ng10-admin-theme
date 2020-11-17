import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public user = {email: 'eve.holt@reqres.in', password: 'eve.holt@reqres.in'};
  public fuser = {email: 'eve.holt@reqres.in'};
  message: any;
  closeResult: string;
  errmessage: string;
  validForm: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,
    private alertService: AlertService,
    private spinner: SpinnerService
  ) { }

  ngOnInit() {
    this.spinner.closeSpinner();
  }

  login() {
    this.userService.login(this.user.email, this.user.password).subscribe(
      (response) => {
          localStorage.setItem('LoginToken', 'true');
          this.router.navigateByUrl('/admin/dashboard');
          this.spinner.closeSpinner();
        },
        (error) => {
          this.alertService.pushError('Invalid Credentials') ;
          this.spinner.closeSpinner();
        }
        );
  }

  validateEmail(email) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
      this.validForm = false;
      this.errmessage = 'please enter valid email';
    } else {
      this.errmessage = '';
      this.validForm = true;
    }
  }
}
