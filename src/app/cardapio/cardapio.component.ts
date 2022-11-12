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
  @Input() opcoesSelecionadas: string[] = [];
  selecionados = 0;
  limite = false;

  constructor() { }

  ngOnInit(): void {
  }

  marcar(e: string) {
    const idx = this.opcoesSelecionadas.indexOf(e);

    if (idx === -1) {
      this.opcoesSelecionadas.push(e);
    } else {
      this.opcoesSelecionadas.splice(idx, 1);
    }
  }

  opcaoSelecionada(o: string) {
    return this.opcoesSelecionadas.indexOf(o) !== -1;
  }

  opcaoHabilitada(o: string) {
    return this.opcaoSelecionada(o) || !(this.opcoesSelecionadas.length >= this.escolhaAte);
  }

}
