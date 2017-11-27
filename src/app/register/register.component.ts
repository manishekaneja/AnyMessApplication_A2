import { Component, OnInit } from '@angular/core';
import { DataBlock } from '../jsons/DataClasses';
import { AjaxCallService } from '../ajax-call.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../jsons/validation.css'],
  providers: []
})
export class RegisterComponent{
  invalidAttempt = false;
  registered = false;
  wait = false;
  data = new DataBlock("", "", "", "", "");

  constructor(public ajaxCall: AjaxCallService) {
  }

  doRegister(): void {
    this.invalidAttempt = false;
    this.registered = false;
    this.wait = true;
    if (this.data.cpassword === this.data.password) {
      this.ajaxCall.doRegister(this.data).subscribe((data) => {
        let response: any = data;
        if (response.valid == true) {
          this.wait = false;
          this.registered = true;
        }
        else {
          this.wait = false;
          this.invalidAttempt = true;
        }
      })
    }
    else {
      this.wait = false;
      this.invalidAttempt = true;
    }
  }

}


