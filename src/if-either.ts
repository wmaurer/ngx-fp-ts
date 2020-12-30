import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Either, isRight, isLeft } from 'fp-ts/es6/Either';

import { initialIfContext, initialRefs, IfContext, assertTemplate, updateView } from './common';

@Directive({ selector: '[ifRight]' })
export class IfRight<TE = unknown, TD = unknown> {
    private context: IfContext<TE | TD> = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifRight(either: Either<TE, TD> | null) {
        testIsAnEither(either, 'ifRight');
        if (either) {
            if (isRight(either)) {
                this.context.ifTrue = true;
                this.context.$implicit = either.right;
            } else {
                this.context.ifTrue = false;
                this.context.$implicit = either.left;
            }
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifRightThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
        assertTemplate('ifRightThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifRightElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
        assertTemplate('ifRightElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }

    static ngTemplateGuard_ifRight: 'binding';

    static ngTemplateContextGuard<TE, TD>(
        _dir: IfRight<TE, TD>,
        _ctx: any,
    ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
        return true;
    }
}

@Directive({ selector: '[ifLeft]' })
export class IfLeft<TE = unknown, TD = unknown> {
    private context: IfContext<TE | TD> = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifLeft(either: Either<TE, TD> | null) {
        testIsAnEither(either, 'ifLeft');
        if (either) {
            if (isLeft(either)) {
                this.context.ifTrue = true;
                this.context.$implicit = either.left;
            } else {
                this.context.ifTrue = false;
                this.context.$implicit = either.right;
            }
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifLeftThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
        assertTemplate('ifLeftThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifLeftElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
        assertTemplate('ifLeftElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }

    static ngTemplateGuard_ifLeft: 'binding';

    static ngTemplateContextGuard<TE, TD>(_dir: IfLeft<TE, TD>, _ctx: any): _ctx is IfContext<TE> {
        return true;
    }
}

function testIsAnEither(either: any, directiveName: string) {
    // null should be allowe as async pipe outputs first value as null
    const isAnEither =
        either === null || (!!either && typeof either === 'object' && (isRight(either) || isLeft(either)));
    if (!isAnEither) {
        throw new Error(`Error in ${directiveName} directive. ${either} is not an fp-ts Either!`);
    }
}
