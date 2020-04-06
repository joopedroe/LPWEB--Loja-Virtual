import { Component, OnInit } from '@angular/core';
import {ProdutosService} from './produtos.service'
import { Produto } from './models/produto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loja Virtual';
  produtos=null;
  carrinho=[];
  constructor(private service:ProdutosService){

  }
  ngOnInit(): void {
    this.service.lista().subscribe((dados:any)=>this.produtos=dados);
  }

  comprar(produto:any){
    const produtoCarrinho=this.carrinho.find(
      (p:any)=>p.id === produto.id
    );
    if (!produtoCarrinho){
      this.carrinho.push({
        id:produto.id,
        nome:produto.nome,
        preco:produto.preco,
        quantidade:1
      });
      }
      else{
        produtoCarrinho.quantidade +=1;
    }
  }
  calculaTotalCarrinho(){
    let total=0;
    for(const produto of this.carrinho){
      total+=produto.quantidade*produto.preco;
    }
    return total;
  }

}
