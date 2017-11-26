import { Component, OnInit } from '@angular/core';
import { AjaxCallService } from '../ajax-call.service';
import { Message } from '../jsons/DataClasses';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {

  constructor(private ajax: AjaxCallService) { }

  ngOnInit() {
    this.addMessage = "";
  }
  failed: boolean;
  succ: boolean;
  addMessage: string;
  send() {
    this.ajax.addMessage('123123', this.addMessage).add(() => {
      if (this.ajax.addResult.valid) {
        this.succ = true;
        setTimeout(() => {
          this.succ = false;
        }, 3000)

      }
      else {
        this.failed = true;
        setTimeout(() => {
          this.failed = false;
        }, 3000)




      }
    })
  }



}
