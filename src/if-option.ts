import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Option } from 'fp-ts/lib/Option';

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
        this.context.ifTrue = option.isSome();
        this.context.$implicit = option.getOrElse(null);
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
        this.context.ifTrue = option.isNone();
        this.context.$implicit = option.getOrElse(null);
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
    const isAnOption =
        !!option &&
        typeof option === 'object' &&
        typeof option.isSome === 'function' &&
        typeof option.isNone === 'function';
    if (!isAnOption) {
        throw new Error(`Error in ${directiveName} directive. ${option} is not an fp-ts Option!`);
    }
}
