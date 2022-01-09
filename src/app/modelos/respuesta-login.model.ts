export class RespuestaLogin {

  public tokenLogin: string;
  public base64Login: string;

  constructor(tok: string, bas: string){
    this.tokenLogin = tok;
    this.base64Login = bas;
  }

}
