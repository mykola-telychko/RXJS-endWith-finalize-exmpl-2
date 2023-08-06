import { endWith, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of('Hello', 'Friend');

source$
  // emit on completion
  .pipe(
    endWith('Goodbye', 'Friend'),
    // this function is invoke when unsubscribe methods are called
    finalize(() => console.log('_ FIN _'))
  )
  // 'Hello', 'Friend', 'Goodbye', 'Friend'
  .subscribe((val) => console.log(val));
