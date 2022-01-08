import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class Imagen {

  public codimagen: number;
  public nombrepublicoimagen: string;
  public nombreprivadoimagen: string;
  public tipoimagen: string;
  public tamanoimagen: string;
  public fechacreacionimagen: string;
  public base64imagen: string;

  constructor(codi:number, pubnom:string, prinom:string, tipo:string, tama:string, fech:string, base:string){
    this.codimagen = codi;
    this.nombrepublicoimagen = pubnom;
    this.nombreprivadoimagen = prinom;
    this.tipoimagen = tipo;
    this.tamanoimagen = tama;
    this.fechacreacionimagen = fech;
    this.base64imagen = base;
  }

}
