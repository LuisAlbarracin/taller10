import { Imagen } from "./imagen.model";

export class Equipo {

  public codigoequipo: number;
  public fotoequipo: Imagen;
  public nombreequipo: string;
  public fechafundacionequipo: string;
  public estadioequipo: string;

  constructor(cod: number, fot: Imagen, nom: string, fec: string, est: string){
    this.codigoequipo = cod;
    this.fotoequipo = fot;
    this.nombreequipo = nom;
    this.fechafundacionequipo = fec;
    this.estadioequipo = est;
  }

}
