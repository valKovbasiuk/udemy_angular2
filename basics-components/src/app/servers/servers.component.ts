import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username = 'test user';

  constructor() { }


  ngOnInit() {
  }

  checkIfEmpty() {
    return !this.username
  }
  clearInput(event) {
    this.username = '';
  }
}
