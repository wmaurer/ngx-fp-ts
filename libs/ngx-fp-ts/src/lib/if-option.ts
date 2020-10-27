import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Option, isNone, isSome } from 'fp-ts/Option';

import { initialIfContext, initialRefs, IfContext, assertTemplate, updateView } from './common';

@Directive({ selector: '[ifSome]' })
export class IfSome {
    private context = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifSome(option: Option<any>) {
        testIsAnOption(option, 'ifSome');
        if (isSome(option)) {
            this.context.ifTrue = true;
            this.context.$implicit = option.value;
        } else {
            this.context.ifTrue = false;
            this.context.$implicit = undefined;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifSomeThen(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifSomeThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifSomeElse(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifSomeElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}

@Directive({ selector: '[ifNone]' })
export class IfNone {
    private context = initialIfContext();

    private refs = initialRefs();

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>) {
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }

    @Input()
    set ifNone(option: Option<any>) {
        testIsAnOption(option, 'ifNone');
        this.context.$implicit = undefined;
        if (isNone(option)) {
            this.context.ifTrue = true;
        } else {
            this.context.ifTrue = false;
        }
        updateView(this.context, this.refs);
    }

    @Input()
    set ifNoneThen(templateRef: TemplateRef<IfContext> | null) {
        assertTemplate('ifNoneThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }

    @Input()
    set ifNoneElse(templateRef: TemplateRef<IfContext> | null) {
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
