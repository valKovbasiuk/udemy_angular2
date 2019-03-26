import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.server = this.route.snapshot.params;

    this.route.params.subscribe(data => (console.log(data.id));

    //------------
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // };
    // this.route.params.subscribe((params: Params) => {
    //   this.user.id = params['id'];
    //   this.user.name = params['name'];
    // });

    //----
  }
}
