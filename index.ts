import { interval } from 'rxjs';
import { windowCount, mergeAll, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowcount
// Example 1: Start new window every x items emitted

//emit every 1s
const srcInterval$ = interval(1000);
const example = srcInterval$.pipe(
  //start new window every 4 emitted values
  windowCount(4),
  tap((_) => console.log('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    //window emits nested observable
    mergeAll()
  )
  .subscribe((val) => console.log(val));
/*
            output:
            "NEW WINDOW!"
            0
            1
            2
            3
            "NEW WINDOW!"
            4
            5
            6
            7
*/
