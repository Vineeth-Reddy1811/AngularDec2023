import { Component } from '@angular/core';

import { DefaultComponent } from './default/default.component';
import { SignalsComponent } from './Signals/signals.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [DefaultComponent, SignalsComponent]
})
export class AppComponent {}
