# ngx-fp-ts

Angular structural directives for [fp-ts](https://github.com/gcanti/fp-ts) types (Option, Either).

## Install

```
    npm install ngx-fp-ts
```

## Usage

Import the `NgxFpTsModule` module and add it to the `imports` of your module:

```
    import { NgxFpTsModule } from 'ngx-fp-ts';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, NgxFpTsModule],
        providers: [],
        bootstrap: [AppComponent],
    })
    export class AppModule {}
```

Alternatively, you can import individual directives and add them to the `declarations` of your module:

```
    import { IfSome} from 'ngx-fp-ts';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        providers: [],
        declarations: [IfSome],
        bootstrap: [AppComponent],
    })
    export class AppModule {}
```

### `ifSome`

Conditionally includes a template based on whether an `Option` variable is `Some` or not.

The inline, `then` and `else` templates work in the same manner as [ngIf](https://angular.io/api/common/NgIf).

The encapsulated value of the `Option` (when `Some`) can be stored in a local variable.

```
    <div *ifSome="o; else oNoneTemplate; let v">
        o value is {{ v }}
    </div>
    <ng-template #oNoneTemplate>
        o is none
    </ng-teplate>
```

### `ifNone`

Conditionally includes a template based on whether an `Option` variable is `Some` or not.

The inline, `then` and `else` templates work in the same manner as [ngIf](https://angular.io/api/common/NgIf).

The encapsulated value of the `Option` (when `Some`) can be stored in a local variable.

```
    <div *ifNone="o; else oNoneTemplate">
        o value is none
    </div>
    <ng-template #oNoneTemplate let-v>
        o value is {{ v }}
    </ng-teplate>
```

### `ifLeft`

Conditionally includes a template based on whether an `Either` variable is `Left` or `Right`.

The inline, `then` and `else` templates work in the same manner as [ngIf](https://angular.io/api/common/NgIf).

The encapsulated value of the `Either` variable can be stored in a local variable.

```
    <div *ifLeft="e; else eLeftTemplate; let v">
        e is left, value is {{ v }}
    </div>
    <ng-template #eRightTemplate let-v>
        e is right, value is {{ v }}
    </ng-teplate>
```

### `ifRight`

Conditionally includes a template based on whether an `Either` variable is `Right` or `Left`.

The inline, `then` and `else` templates work in the same manner as [ngIf](https://angular.io/api/common/NgIf).

The encapsulated value of the `Either` variable can be stored in a local variable.

```
    <div *ifRight="e; else eRightTemplate; let v">
        e is right, value is {{ v }}
    </div>
    <ng-template #eLeftTemplate let-v>
        e is left, value is {{ v }}
    </ng-teplate>
```

## Thanks

Special thanks to [Giulio Canti](https://github.com/gcanti) for the fantastic [fp-ts](https://github.com/gcanti/fp-ts) library.
