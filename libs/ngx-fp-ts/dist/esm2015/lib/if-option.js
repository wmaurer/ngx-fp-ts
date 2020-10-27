import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isNone, isSome } from 'fp-ts/Option';
import { initialIfContext, initialRefs, assertTemplate, updateView } from './common';
import * as i0 from "@angular/core";
export class IfSome {
    constructor(viewContainer, templateRef) {
        this.context = initialIfContext();
        this.refs = initialRefs();
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }
    set ifSome(option) {
        testIsAnOption(option, 'ifSome');
        if (isSome(option)) {
            this.context.ifTrue = true;
            this.context.$implicit = option.value;
        }
        else {
            this.context.ifTrue = false;
            this.context.$implicit = undefined;
        }
        updateView(this.context, this.refs);
    }
    set ifSomeThen(templateRef) {
        assertTemplate('ifSomeThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }
    set ifSomeElse(templateRef) {
        assertTemplate('ifSomeElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}
IfSome.ɵfac = function IfSome_Factory(t) { return new (t || IfSome)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
IfSome.ɵdir = i0.ɵɵdefineDirective({ type: IfSome, selectors: [["", "ifSome", ""]], inputs: { ifSome: "ifSome", ifSomeThen: "ifSomeThen", ifSomeElse: "ifSomeElse" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IfSome, [{
        type: Directive,
        args: [{ selector: '[ifSome]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifSome: [{
            type: Input
        }], ifSomeThen: [{
            type: Input
        }], ifSomeElse: [{
            type: Input
        }] }); })();
export class IfNone {
    constructor(viewContainer, templateRef) {
        this.context = initialIfContext();
        this.refs = initialRefs();
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }
    set ifNone(option) {
        testIsAnOption(option, 'ifNone');
        this.context.$implicit = undefined;
        if (isNone(option)) {
            this.context.ifTrue = true;
        }
        else {
            this.context.ifTrue = false;
        }
        updateView(this.context, this.refs);
    }
    set ifNoneThen(templateRef) {
        assertTemplate('ifNoneThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }
    set ifNoneElse(templateRef) {
        assertTemplate('ifNoneElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}
IfNone.ɵfac = function IfNone_Factory(t) { return new (t || IfNone)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
IfNone.ɵdir = i0.ɵɵdefineDirective({ type: IfNone, selectors: [["", "ifNone", ""]], inputs: { ifNone: "ifNone", ifNoneThen: "ifNoneThen", ifNoneElse: "ifNoneElse" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IfNone, [{
        type: Directive,
        args: [{ selector: '[ifNone]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifNone: [{
            type: Input
        }], ifNoneThen: [{
            type: Input
        }], ifNoneElse: [{
            type: Input
        }] }); })();
function testIsAnOption(option, directiveName) {
    const isAnOption = !!option && typeof option === 'object' && (isSome(option) || isNone(option));
    if (!isAnOption) {
        throw new Error(`Error in ${directiveName} directive. ${option} is not an fp-ts Option!`);
    }
}
//# sourceMappingURL=if-option.js.map