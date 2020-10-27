import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { isRight, isLeft } from 'fp-ts/Either';
import { initialIfContext, initialRefs, assertTemplate, updateView } from './common';
import * as i0 from "@angular/core";
export class IfRight {
    constructor(viewContainer, templateRef) {
        this.context = initialIfContext();
        this.refs = initialRefs();
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }
    set ifRight(either) {
        testIsAnEither(either, 'ifRight');
        if (isRight(either)) {
            this.context.ifTrue = true;
            this.context.$implicit = either.right;
        }
        else {
            this.context.ifTrue = false;
            this.context.$implicit = either.left;
        }
        updateView(this.context, this.refs);
    }
    set ifRightThen(templateRef) {
        assertTemplate('ifRightThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }
    set ifRightElse(templateRef) {
        assertTemplate('ifRightElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}
IfRight.ɵfac = function IfRight_Factory(t) { return new (t || IfRight)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
IfRight.ɵdir = i0.ɵɵdefineDirective({ type: IfRight, selectors: [["", "ifRight", ""]], inputs: { ifRight: "ifRight", ifRightThen: "ifRightThen", ifRightElse: "ifRightElse" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IfRight, [{
        type: Directive,
        args: [{ selector: '[ifRight]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifRight: [{
            type: Input
        }], ifRightThen: [{
            type: Input
        }], ifRightElse: [{
            type: Input
        }] }); })();
export class IfLeft {
    constructor(viewContainer, templateRef) {
        this.context = initialIfContext();
        this.refs = initialRefs();
        this.refs.viewContainer = viewContainer;
        this.refs.thenTemplateRef = templateRef;
    }
    set ifLeft(either) {
        testIsAnEither(either, 'ifLeft');
        if (isLeft(either)) {
            this.context.ifTrue = true;
            this.context.$implicit = either.left;
        }
        else {
            this.context.ifTrue = false;
            this.context.$implicit = either.right;
        }
        updateView(this.context, this.refs);
    }
    set ifLeftThen(templateRef) {
        assertTemplate('ifLeftThen', templateRef);
        this.refs.thenTemplateRef = templateRef;
        this.refs.thenViewRef = null;
        updateView(this.context, this.refs);
    }
    set ifLeftElse(templateRef) {
        assertTemplate('ifLeftElse', templateRef);
        this.refs.elseTemplateRef = templateRef;
        this.refs.elseViewRef = null;
        updateView(this.context, this.refs);
    }
}
IfLeft.ɵfac = function IfLeft_Factory(t) { return new (t || IfLeft)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
IfLeft.ɵdir = i0.ɵɵdefineDirective({ type: IfLeft, selectors: [["", "ifLeft", ""]], inputs: { ifLeft: "ifLeft", ifLeftThen: "ifLeftThen", ifLeftElse: "ifLeftElse" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IfLeft, [{
        type: Directive,
        args: [{ selector: '[ifLeft]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifLeft: [{
            type: Input
        }], ifLeftThen: [{
            type: Input
        }], ifLeftElse: [{
            type: Input
        }] }); })();
function testIsAnEither(either, directiveName) {
    const isAnEither = !!either && typeof either === 'object' && (isRight(either) || isLeft(either));
    if (!isAnEither) {
        throw new Error(`Error in ${directiveName} directive. ${either} is not an fp-ts Either!`);
    }
}
//# sourceMappingURL=if-either.js.map