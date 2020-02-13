import { Directive, DoCheck, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isPending, isSuccess, RemoteData, RemoteProgress } from '@devexperts/remote-data-ts';
import { Option } from 'fp-ts/lib/Option';

@Directive({ selector: '[switchRemoteData]' })
export class SwitchRemoteDataDirective<E, A> {
    @Input('switchRemoteData') public parameter: RemoteData<E, A>;
}

@Directive({ selector: '[caseRemoteDataSuccess]' })
export class CaseRemoteDataSuccessDirective<E, A> implements DoCheck {
    private view: SwitchView<A>;

    constructor(
        viewContainer: ViewContainerRef,
        templateRef: TemplateRef<object>,
        @Host() private switchRemoteData: SwitchRemoteDataDirective<E, A>,
    ) {
        this.view = new SwitchView(viewContainer, templateRef);
    }

    ngDoCheck() {
        if (isSuccess(this.switchRemoteData.parameter)) {
            this.view.enforceState(true, this.switchRemoteData.parameter.value);
        } else {
            this.view.enforceState(false, undefined);
        }
    }
}

@Directive({ selector: '[caseRemoteDataPending]' })
export class CaseRemoteDataPendingDirective<E, A> implements DoCheck {
    private view: SwitchView<Option<RemoteProgress>>;

    constructor(
        viewContainer: ViewContainerRef,
        templateRef: TemplateRef<object>,
        @Host() private switchRemoteData: SwitchRemoteDataDirective<E, A>,
    ) {
        this.view = new SwitchView(viewContainer, templateRef);
    }

    ngDoCheck() {
        if (isPending(this.switchRemoteData.parameter)) {
            this.view.enforceState(true, this.switchRemoteData.parameter.progress);
        } else {
            this.view.enforceState(false, undefined);
        }
    }
}

class SwitchView<T = unknown> {
    private created = false;

    constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<object>) {}

    create(implicitContext: T): void {
        this.created = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: implicitContext });
    }

    destroy(): void {
        this.created = false;
        this.viewContainerRef.clear();
    }

    enforceState(created: boolean, implicitContext: T | undefined) {
        if (created && !this.created) {
            this.create(implicitContext);
        } else if (!created && this.created) {
            this.destroy();
        }
    }
}
