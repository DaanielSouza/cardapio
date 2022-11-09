import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.sass']
})
export class CardapioComponent implements OnInit {

  @Input() escolhaAte: number = 0;
  @Input() titulo: string = "";
  @Input() opcoes: string[] = [];
  selecionados = 0;
  limite = false;

  constructor() { }

  ngOnInit(): void {
  }

  marcar(e: any) {
    if (this.selecionados <= this.escolhaAte && this.selecionados >= 0) {
      if (e.target.checked) {
        this.selecionados++;
      } else {
        this.selecionados--;
      }
    } else {
      e.target.checked = false;
    }

    if (this.selecionados >= 3) {
      let checks = document.querySelectorAll('input[type="checkbox"]:not(:checked)');

      for (let i = 0; i < checks.length; i++) {
        checks[i].setAttribute("disabled", "");
      }
    } else {
      let checks = document.querySelectorAll('input[type="checkbox"]:disabled');

      for (let i = 0; i < checks.length; i++) {
        checks[i].removeAttribute("disabled");
      }
    }
  }


}
