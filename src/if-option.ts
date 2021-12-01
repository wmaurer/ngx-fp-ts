import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Option, isNone, isSome } from 'fp-ts/es6/Option';

import { initialIfContext, initialRefs, IfContext, assertTemplate, updateView } from './common';

@Directive({ selector: '[ifSome]' })
export class IfSome<T = unknown> {
    private context: IfContext<T> = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<T>>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifSome(option: Option<T> | null) {
        testIsAnOption(option, 'ifSome');
        if (option && isSome(option)) {
            this.context.ifTrue = true;
            this.context.$implicit = option.value;
        } else {
            this.context.ifTrue = false;
            this.context.$implicit = null!;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifSomeThen(templateRef: TemplateRef<IfContext<T>> | null) {
        assertTemplate('ifSomeThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifSomeElse(templateRef: TemplateRef<IfContext<T>> | null) {
        assertTemplate('ifSomeElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }

    static ngTemplateGuard_ifSome: 'binding';

    static ngTemplateContextGuard<T>(
        _dir: IfSome<T>,
        _ctx: any,
    ): _ctx is IfContext<Exclude<T, false | 0 | '' | null | undefined>> {
        return true;
    }
}

@Directive({ selector: '[ifNone]' })
export class IfNone<T = unknown> {
    private context: IfContext<T> = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<T>>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifNone(option: Option<T> | null) {
        testIsAnOption(option, 'ifNone');
        this.context.$implicit = null!;
        if (option === null || isNone(option)) {
            this.context.ifTrue = true;
        } else {
            this.context.ifTrue = false;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifNoneThen(templateRef: TemplateRef<IfContext<T>> | null) {
        assertTemplate('ifNoneThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifNoneElse(templateRef: TemplateRef<IfContext<T>> | null) {
        assertTemplate('ifNoneElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}

function testIsAnOption(option: any, directiveName: string) {
    const isAnOption = !!option && typeof option === 'object' && (isSome(option) || isNone(option));
    if (!isAnOption) {
        throw new Error(`Error in ${directiveName} directive. ${option} is not an fp-ts Option!`);
    }
}
