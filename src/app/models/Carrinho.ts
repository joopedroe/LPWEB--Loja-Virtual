import {Produto} from './produto'
export class Carrinho{
    id: number;
    produtos: Produto[]=[];
    total:number;
}