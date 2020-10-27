import { ɵstringify, ɵɵdirectiveInject, ViewContainerRef, TemplateRef, ɵɵdefineDirective, ɵsetClassMetadata, Directive, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { isRight, isLeft } from 'fp-ts/Either';
import { isSome, isNone } from 'fp-ts/Option';

const initialIfContext = () => ({
    $implicit: null,
    ifTrue: false,
});
const initialRefs = () => ({
    viewContainer: null,
    thenTemplateRef: null,
    elseTemplateRef: null,
    thenViewRef: null,
    elseViewRef: null,
});
function updateView(context, refs) {
    if (context.ifTrue) {
        if (!refs.thenViewRef) {
            refs.viewContainer.clear();
            refs.elseViewRef = null;
            if (refs.thenTemplateRef) {
                refs.thenViewRef = refs.viewContainer.createEmbeddedView(refs.thenTemplateRef, context);
            }
        }
    }
    else {
        if (!refs.elseViewRef) {
            refs.viewContainer.clear();
            refs.thenViewRef = null;
            if (refs.elseTemplateRef) {
                refs.elseViewRef = refs.viewContainer.createEmbeddedView(refs.elseTemplateRef, context);
            }
        }
    }
}
function assertTemplate(property, templateRef) {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received '${ɵstringify(templateRef)}'.`);
    }
}

class IfRight {
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
IfRight.ɵfac = function IfRight_Factory(t) { return new (t || IfRight)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
IfRight.ɵdir = ɵɵdefineDirective({ type: IfRight, selectors: [["", "ifRight", ""]], inputs: { ifRight: "ifRight", ifRightThen: "ifRightThen", ifRightElse: "ifRightElse" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IfRight, [{
        type: Directive,
        args: [{ selector: '[ifRight]' }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { ifRight: [{
            type: Input
        }], ifRightThen: [{
            type: Input
        }], ifRightElse: [{
            type: Input
        }] }); })();
class IfLeft {
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
IfLeft.ɵfac = function IfLeft_Factory(t) { return new (t || IfLeft)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
IfLeft.ɵdir = ɵɵdefineDirective({ type: IfLeft, selectors: [["", "ifLeft", ""]], inputs: { ifLeft: "ifLeft", ifLeftThen: "ifLeftThen", ifLeftElse: "ifLeftElse" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IfLeft, [{
        type: Directive,
        args: [{ selector: '[ifLeft]' }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { ifLeft: [{
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

class IfSome {
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
IfSome.ɵfac = function IfSome_Factory(t) { return new (t || IfSome)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
IfSome.ɵdir = ɵɵdefineDirective({ type: IfSome, selectors: [["", "ifSome", ""]], inputs: { ifSome: "ifSome", ifSomeThen: "ifSomeThen", ifSomeElse: "ifSomeElse" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IfSome, [{
        type: Directive,
        args: [{ selector: '[ifSome]' }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { ifSome: [{
            type: Input
        }], ifSomeThen: [{
            type: Input
        }], ifSomeElse: [{
            type: Input
        }] }); })();
class IfNone {
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
IfNone.ɵfac = function IfNone_Factory(t) { return new (t || IfNone)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef)); };
IfNone.ɵdir = ɵɵdefineDirective({ type: IfNone, selectors: [["", "ifNone", ""]], inputs: { ifNone: "ifNone", ifNoneThen: "ifNoneThen", ifNoneElse: "ifNoneElse" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IfNone, [{
        type: Directive,
        args: [{ selector: '[ifNone]' }]
    }], function () { return [{ type: ViewContainerRef }, { type: TemplateRef }]; }, { ifNone: [{
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

const COMPONENTS = [IfLeft, IfRight, IfSome, IfNone];
class NgxFpTsModule {
}
NgxFpTsModule.ɵmod = ɵɵdefineNgModule({ type: NgxFpTsModule });
NgxFpTsModule.ɵinj = ɵɵdefineInjector({ factory: function NgxFpTsModule_Factory(t) { return new (t || NgxFpTsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxFpTsModule, { declarations: [IfLeft, IfRight, IfSome, IfNone], exports: [IfLeft, IfRight, IfSome, IfNone] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxFpTsModule, [{
        type: NgModule,
        args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IfLeft, IfNone, IfRight, IfSome, NgxFpTsModule };
//# sourceMappingURL=ngx-fp-ts.js.map
