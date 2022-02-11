import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-observables';

  source = of(1, 2, 3);
  
  observer = {
    next: (x: number) => { console.log(x);
    },
    error: (err: any) => { console.log(err);
    },
    complete: () => { console.log('Complete');
    }
  };

  ngOnInit() {
    this.source.subscribe(this.observer);
  }
}
