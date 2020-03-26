import { Component } from '@angular/core';
import {Produto} from './models/produto'
import {Carrinho} from './models/Carrinho'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja Virtual';
  pos=0;
  pessoa:Produto=new Produto();

  produtos:Produto[]=[{id:1,nome:'Alcool Gel',quant:1,preco:29.99},{id:2,nome:'Mascara descartavel',quant:1,preco:9.99}
  ];

  carrinho:Carrinho=new Carrinho;
  

  Adicionar(idE){
    console.log()
    var produtoEntrada=this.verificar(idE,this.produtos)
    console.log(produtoEntrada)
    if(this.carrinho.produtos.length == 0){
      this.carrinho.total=0;
  
    }
    var produtoCarrinho=this.verificar(idE,this.carrinho.produtos)
    var preco=produtoEntrada.preco;
    if (produtoCarrinho == null){
      this.carrinho.produtos.push(produtoEntrada);
    }
    else{
      produtoCarrinho.quant+=1
      console.log(preco);
      produtoCarrinho.preco=produtoCarrinho.quant*preco;
    }
    this.carrinho.total+=preco;
  

    console.log(this.carrinho)
    
  }

  verificar(id,lista){
    for (let pro of lista){
      if(pro.id ==id){
        return pro
      }
    }
  }

}
