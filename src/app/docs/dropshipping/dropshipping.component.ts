import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-dropshipping',
  templateUrl: './dropshipping.component.html',
  styleUrls: ['./dropshipping.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropshippingComponent implements OnInit {

  private _inscricao: Subscription;
  private _capitulo: string;
  private _canal: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        this._canal = queryParams['canal'];
        this._capitulo = queryParams['cap'];
      }
    );
  }

  get capitulo() {
    return this._capitulo;
  }

  get canal() {
    return this._canal;
  }

  irAoTopo() {
    window.scrollTo(0,0);
  }

}
