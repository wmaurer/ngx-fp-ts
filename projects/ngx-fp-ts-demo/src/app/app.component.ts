import { Component } from '@angular/core';
import { RemoteData, success } from '@devexperts/remote-data-ts';
import { left, right } from 'fp-ts/lib/Either';
import { none, some } from 'fp-ts/lib/Option';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // public firstOption = some('first-option');
    public firstOption = none;
    public secondOption = some('second-option');
    // public secondOption = none;
    public firstEither = left('first left either');
    // public firstEither = right('first right either');
    // public secondEither = left('second left either');
    public secondEither = right('second right either');

    public rd = success({ foo: '123' });
}
