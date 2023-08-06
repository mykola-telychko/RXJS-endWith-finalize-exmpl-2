import { endWith, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith

const source$ = of('Hello', 'Friend');

source$
  // emit on completion
  .pipe(
    endWith('end', '...'),
    // this function is invoke when unsubscribe methods are called
    finalize(() => console.log('_ FIN _'))
  )
  .subscribe((val) => console.log(val));
