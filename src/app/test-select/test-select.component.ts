import { Component, OnInit, Input } from '@angular/core';
import { ElementoSelect } from '../models/ElementoSelect';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {
  @Input() opcionesSelect: ElementoSelect[];
  opcionSeleccionada: ElementoSelect;
  constructor() {}

  ngOnInit() {
    this.opcionesSelect = [
      new ElementoSelect('1', 'Elemento 1'),
      new ElementoSelect('2', 'Elemento 2')
    ];
    this.opcionSeleccionada = this.opcionesSelect[1];
  }
}
