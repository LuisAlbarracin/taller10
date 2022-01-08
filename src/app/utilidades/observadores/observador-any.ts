import { Observer } from 'rxjs';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';

export const miObservadorAny: Observer<any> = {
  next(res){
    console.log(res);
  },
  error(err){
    console.log(err);
  },
  complete(){
    console.log('Observador Terminado');
  }
};
