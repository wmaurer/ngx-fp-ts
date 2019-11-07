import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Either, isRight, isLeft } from 'fp-ts/lib/Either';

import { initialIfContext, initialRefs, IfContext, assertTemplate, updateView } from './common';

@Directive({ selector: '[ifRight]' })
export class IfRight {
    private context = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifRight(either: Either<any, any>) {
        testIsAnEither(either, 'ifRight');
        if (isRight(either)) {
            this.context.ifTrue = true;
            this.context.$implicit = either.right;
        } else {
            this.context.ifTrue = false;
            this.context.$implicit = either.left;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifRightThen(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifRightThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifRightElse(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifRightElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}

@Directive({ selector: '[ifLeft]' })
export class IfLeft {
    private context = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifLeft(either: Either<any, any>) {
        testIsAnEither(either, 'ifLeft');
        if (isLeft(either)) {
            this.context.ifTrue = true;
            this.context.$implicit = either.left;
        } else {
            this.context.ifTrue = false;
            this.context.$implicit = either.right;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifLeftThen(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifLeftThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifLeftElse(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifLeftElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}

function testIsAnEither(either: any, directiveName: string) {
    const isAnEither = !!either && typeof either === 'object' && (isRight(either) || isLeft(either));
    if (!isAnEither) {
        throw new Error(`Error in ${directiveName} directive. ${either} is not an fp-ts Either!`);
    }
}
