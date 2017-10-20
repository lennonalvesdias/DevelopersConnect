import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-menu-drop',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class DropshippingMenuComponent implements OnInit {

  private _inscricao: Subscription;
  private _canal: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        this._canal = queryParams['canal'];
      }
    );
  }

  get canal() {
    return this._canal;
  }

}
