import { from, fromEvent, Observable, of, combineLatest, interval, timer} from 'rxjs';
import { map, catchError, debounceTime, switchMap, delay, find, scan, filter, pluck, skip, startWith, take, takeLast, throttle} from 'rxjs/operators';

const inputElement: HTMLInputElement = document.querySelector('#refInput') as HTMLInputElement;


type IRepo =  { name: string, owner: { repos_url: string } }
type IGithubRepos = { items: IRepo[] }


const source1$: Observable<any> = fromEvent(inputElement, 'click').pipe(
  throttle(x => interval(3000))
);

source1$.subscribe(data => console.log('double click'))




const source$: Observable<IGithubRepos> = fromEvent(inputElement, 'input').pipe(
  map((event: Event) => (event.target as any).value),
  debounceTime(500),
  switchMap((value: string) => {
    console.log(value)
    return from(
      fetch(`https://api.github.com/search/repositories?q=${value}`)
      .then((res: Response) => res.json())
      .catch((err) => console.log(err))
    )
  }),
  catchError((err: Error, caught: any) => {
    return of(err)
  })
);

source$.subscribe((repo: IGithubRepos) => {
  const wrapperElement: HTMLInputElement = document.querySelector('.wrapper') as HTMLInputElement;
  wrapperElement.innerHTML = '';

  repo.items.forEach((item: IRepo) => {
    const a: HTMLAnchorElement = document.createElement('a');
    a.innerHTML = item.name;
    a.setAttribute('href', item.owner.repos_url)
    wrapperElement.appendChild(a)
  })
},
  (err: Error) => {
    console.log(err)
  }
)

const a$: Observable<number> = of(1, 2).pipe(
  delay(2000)
);
const b$: Observable<number> = of(2);
const d$: Observable<number> = of(4);

const array$ = [ a$, b$, d$,];


const c$: Observable<number> = combineLatest(
  ...array$,
  (a: number, b: number, d: number) => a + b + d
)

c$.subscribe((c: number) => console.log(c))


// interval(1000).pipe(
//   map(() => new Date())
// ).subscribe((date: Date) => {
//   console.log(date)
// })



const id: number = 1;
const item$: Observable<number> = from([1, 2, 3, 4])


item$.pipe(
  find((value: number, index: number) => value === id )
).subscribe(data => console.log(data))


item$.pipe(
  takeLast(1),
  startWith(20),
  scan((acc: number, next: number) => acc + next, 0),
  filter((value: number) => value > 5 ),
  skip(1),
  map((data: number) => ({ result: data })),
  pluck('result'),
).subscribe(data => console.log('sum', data))





console.log('Common way', new Date())
// const c: Observable<number> = a$.pipe(
//   map((value: number) => )
// )




// source$.subscribe((value: Event) => {
//   console.log('list2', value)
// })


// const subscription: Subscription = source$.subscribe((value: Event) => {
//   console.log('list3', value)
// })

// subscription.unsubscribe()





// old
// source$.map(
//   map((event: Event) => (event.target as any).value)
// ).subscribe((value: string) => {
//   console.log('value', value)
// })



// const sourse$ = from(['hello', 'worls']);


// sourse$.subscribe((data: string) => {
//   console.log(data)
// })

// interface IListener {
//   update(msg: string): void
// }

// interface IObserver {
//   add(listener: IListener): void;
//   remove(listener: IListener): void;
//   notify(msg: string, listener?: IListener[]): void;
// }

// class Observer implements IObserver {
//   private _listeners: IListener[] = [];

//   public add(listener: IListener): void {
//     this._listeners.push(listener)
//   }

//   public remove(listener: IListener): void {
//     const index: number = this._listeners.indexOf(listener);
//     this._listeners.splice(index, 1)
//   }

//   public notify(msg: string, listeners: IListener[]): void {
//     if(listeners) {
//       return this._notifyListeners(listeners, msg)
//     }

//     return this._notifyListeners(this._listeners, msg)
//   }

//   private _notifyListeners(listeners: IListener[], msg: string): void {
//     listeners.forEach((listener: IListener) => {
//       listener.update(msg);
//     })
//   }

// }

// const listener1: IListener = {
//   update(msg: string) {
//     console.log(`listener1 ${msg}`)
//   }
// }

// const listener2: IListener = {
//   update(msg: string) {
//     console.log(`listener2 ${msg}`)
//   }
// }

// const listener3: IListener = {
//   update(msg: string) {
//     console.log(`listener3 ${msg}`)
//   }
// }

// const listener4: IListener = {
//   update(msg: string) {
//     console.log(`listener4 ${msg}`)
//   }
// }

// const observer: IObserver = new Observer();
// observer.add(listener1);
// observer.add(listener2);
// observer.add(listener3);
// // observer.remove(listener1)
// observer.add(listener4);

// observer.notify('Hello world');
// observer.notify('Hello Rxjs', [listener1]);






