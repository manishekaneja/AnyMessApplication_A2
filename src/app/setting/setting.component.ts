import { Component, OnInit } from '@angular/core';
import { DataBlock } from '../jsons/DataClasses';
import { AjaxCallService } from '../ajax-call.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css', "../jsons/validation.css"]
})
export class SettingComponent implements OnInit {
  invalidAttempt = false;
  registered = false;
  wait = false;
  data = new DataBlock("", "", "", "", "");
  constructor(public ajaxCall: AjaxCallService) {
  }
  ngOnInit() {
    this.data = this.ajaxCall.userdata;
    this.data.password = "";
  }
  doUpdate(): void {
    this.invalidAttempt = false;
    this.registered = false;
    this.wait = true;
    if (this.data.cpassword === this.data.password) {
      this.ajaxCall.doUpdate(this.data).subscribe((data) => {

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