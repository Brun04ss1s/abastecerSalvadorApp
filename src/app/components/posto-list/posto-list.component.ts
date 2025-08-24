import { Component, OnInit } from '@angular/core';
import { PostoService } from '../../services/posto.service';
import { CommonModule } from '@angular/common';

export interface Posto{
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-posto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posto-list.component.html',
  styleUrl: './posto-list.component.css'
})

export class PostoListComponent implements OnInit {

  postos: Posto[] = [];

  constructor(private postoService: PostoService){}

  ngOnInit(): void {
    this.postoService.getPostos().subscribe(dadosRecebidos =>{
      this.postos = dadosRecebidos;
      console.log('Postos Recebidos da Api: ', this.postos);
    });
  }
}
