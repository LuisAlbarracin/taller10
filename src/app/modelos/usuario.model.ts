import { Imagen } from './imagen.model';
export class Usuario {

public codigousuario: number;
public fotousuario: Imagen;
public documentousuario: string;
public tipodocumentousuario: string;
public nombresusuario: string;
public apellidosusuario: string;
public correousuario: string;
public claveusuario: string;

public reclaveusuario?: string;
public token?:string;

constructor(cod: number, foto:Imagen, doc: string, tipo: string, nom: string, ape:string, cor:string, cla:string){
  this.codigousuario = cod;
  this.fotousuario = foto;
  this.documentousuario = doc;
  this.tipodocumentousuario = tipo;
  this.nombresusuario = nom;
  this.apellidosusuario = ape;
  this.correousuario = cor;
  this.claveusuario = cla;
}

}
