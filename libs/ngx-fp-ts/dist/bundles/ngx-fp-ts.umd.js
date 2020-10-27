(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('fp-ts/Either'), require('fp-ts/Option')) :
    typeof define === 'function' && define.amd ? define('ngx-fp-ts', ['exports', '@angular/core', 'fp-ts/Either', 'fp-ts/Option'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-fp-ts'] = {}, global.ng.core, global.Either, global.Option));
}(this, (function (exports, i0, Either, Option) { 'use strict';

    var initialIfContext = function () { return ({
        $implicit: null,
        ifTrue: false,
    }); };
    var initialRefs = function () { return ({
        viewContainer: null,
        thenTemplateRef: null,
        elseTemplateRef: null,
        thenViewRef: null,
        elseViewRef: null,
    }); };
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
        var isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
        if (!isTemplateRefOrNull) {
            throw new Error(property + " must be a TemplateRef, but received '" + i0.ɵstringify(templateRef) + "'.");
        }
    }

    var IfRight = /** @class */ (function () {
        function IfRight(viewContainer, templateRef) {
            this.context = initialIfContext();
            this.refs = initialRefs();
            this.refs.viewContainer = viewContainer;
            this.refs.thenTemplateRef = templateRef;
        }
        Object.defineProperty(IfRight.prototype, "ifRight", {
            set: function (either) {
                testIsAnEither(either, 'ifRight');
                if (Either.isRight(either)) {
                    this.context.ifTrue = true;
                    this.context.$implicit = either.right;
                }
                else {
                    this.context.ifTrue = false;
                    this.context.$implicit = either.left;
                }
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfRight.prototype, "ifRightThen", {
            set: function (templateRef) {
                assertTemplate('ifRightThen', templateRef);
                this.refs.thenTemplateRef = templateRef;
                this.refs.thenViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfRight.prototype, "ifRightElse", {
            set: function (templateRef) {
                assertTemplate('ifRightElse', templateRef);
                this.refs.elseTemplateRef = templateRef;
                this.refs.elseViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        return IfRight;
    }());
    IfRight.ɵfac = function IfRight_Factory(t) { return new (t || IfRight)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    IfRight.ɵdir = i0.ɵɵdefineDirective({ type: IfRight, selectors: [["", "ifRight", ""]], inputs: { ifRight: "ifRight", ifRightThen: "ifRightThen", ifRightElse: "ifRightElse" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IfRight, [{
                type: i0.Directive,
                args: [{ selector: '[ifRight]' }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifRight: [{
                    type: i0.Input
                }], ifRightThen: [{
                    type: i0.Input
                }], ifRightElse: [{
                    type: i0.Input
                }] });
    })();
    var IfLeft = /** @class */ (function () {
        function IfLeft(viewContainer, templateRef) {
            this.context = initialIfContext();
            this.refs = initialRefs();
            this.refs.viewContainer = viewContainer;
            this.refs.thenTemplateRef = templateRef;
        }
        Object.defineProperty(IfLeft.prototype, "ifLeft", {
            set: function (either) {
                testIsAnEither(either, 'ifLeft');
                if (Either.isLeft(either)) {
                    this.context.ifTrue = true;
                    this.context.$implicit = either.left;
                }
                else {
                    this.context.ifTrue = false;
                    this.context.$implicit = either.right;
                }
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfLeft.prototype, "ifLeftThen", {
            set: function (templateRef) {
                assertTemplate('ifLeftThen', templateRef);
                this.refs.thenTemplateRef = templateRef;
                this.refs.thenViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfLeft.prototype, "ifLeftElse", {
            set: function (templateRef) {
                assertTemplate('ifLeftElse', templateRef);
                this.refs.elseTemplateRef = templateRef;
                this.refs.elseViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        return IfLeft;
    }());
    IfLeft.ɵfac = function IfLeft_Factory(t) { return new (t || IfLeft)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    IfLeft.ɵdir = i0.ɵɵdefineDirective({ type: IfLeft, selectors: [["", "ifLeft", ""]], inputs: { ifLeft: "ifLeft", ifLeftThen: "ifLeftThen", ifLeftElse: "ifLeftElse" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IfLeft, [{
                type: i0.Directive,
                args: [{ selector: '[ifLeft]' }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifLeft: [{
                    type: i0.Input
                }], ifLeftThen: [{
                    type: i0.Input
                }], ifLeftElse: [{
                    type: i0.Input
                }] });
    })();
    function testIsAnEither(either, directiveName) {
        var isAnEither = !!either && typeof either === 'object' && (Either.isRight(either) || Either.isLeft(either));
        if (!isAnEither) {
            throw new Error("Error in " + directiveName + " directive. " + either + " is not an fp-ts Either!");
        }
    }

    var IfSome = /** @class */ (function () {
        function IfSome(viewContainer, templateRef) {
            this.context = initialIfContext();
            this.refs = initialRefs();
            this.refs.viewContainer = viewContainer;
            this.refs.thenTemplateRef = templateRef;
        }
        Object.defineProperty(IfSome.prototype, "ifSome", {
            set: function (option) {
                testIsAnOption(option, 'ifSome');
                if (Option.isSome(option)) {
                    this.context.ifTrue = true;
                    this.context.$implicit = option.value;
                }
                else {
                    this.context.ifTrue = false;
                    this.context.$implicit = undefined;
                }
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfSome.prototype, "ifSomeThen", {
            set: function (templateRef) {
                assertTemplate('ifSomeThen', templateRef);
                this.refs.thenTemplateRef = templateRef;
                this.refs.thenViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfSome.prototype, "ifSomeElse", {
            set: function (templateRef) {
                assertTemplate('ifSomeElse', templateRef);
                this.refs.elseTemplateRef = templateRef;
                this.refs.elseViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        return IfSome;
    }());
    IfSome.ɵfac = function IfSome_Factory(t) { return new (t || IfSome)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    IfSome.ɵdir = i0.ɵɵdefineDirective({ type: IfSome, selectors: [["", "ifSome", ""]], inputs: { ifSome: "ifSome", ifSomeThen: "ifSomeThen", ifSomeElse: "ifSomeElse" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IfSome, [{
                type: i0.Directive,
                args: [{ selector: '[ifSome]' }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifSome: [{
                    type: i0.Input
                }], ifSomeThen: [{
                    type: i0.Input
                }], ifSomeElse: [{
                    type: i0.Input
                }] });
    })();
    var IfNone = /** @class */ (function () {
        function IfNone(viewContainer, templateRef) {
            this.context = initialIfContext();
            this.refs = initialRefs();
            this.refs.viewContainer = viewContainer;
            this.refs.thenTemplateRef = templateRef;
        }
        Object.defineProperty(IfNone.prototype, "ifNone", {
            set: function (option) {
                testIsAnOption(option, 'ifNone');
                this.context.$implicit = undefined;
                if (Option.isNone(option)) {
                    this.context.ifTrue = true;
                }
                else {
                    this.context.ifTrue = false;
                }
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfNone.prototype, "ifNoneThen", {
            set: function (templateRef) {
                assertTemplate('ifNoneThen', templateRef);
                this.refs.thenTemplateRef = templateRef;
                this.refs.thenViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IfNone.prototype, "ifNoneElse", {
            set: function (templateRef) {
                assertTemplate('ifNoneElse', templateRef);
                this.refs.elseTemplateRef = templateRef;
                this.refs.elseViewRef = null;
                updateView(this.context, this.refs);
            },
            enumerable: false,
            configurable: true
        });
        return IfNone;
    }());
    IfNone.ɵfac = function IfNone_Factory(t) { return new (t || IfNone)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    IfNone.ɵdir = i0.ɵɵdefineDirective({ type: IfNone, selectors: [["", "ifNone", ""]], inputs: { ifNone: "ifNone", ifNoneThen: "ifNoneThen", ifNoneElse: "ifNoneElse" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IfNone, [{
                type: i0.Directive,
                args: [{ selector: '[ifNone]' }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { ifNone: [{
                    type: i0.Input
                }], ifNoneThen: [{
                    type: i0.Input
                }], ifNoneElse: [{
                    type: i0.Input
                }] });
    })();
    function testIsAnOption(option, directiveName) {
        var isAnOption = !!option && typeof option === 'object' && (Option.isSome(option) || Option.isNone(option));
        if (!isAnOption) {
            throw new Error("Error in " + directiveName + " directive. " + option + " is not an fp-ts Option!");
        }
    }

    var COMPONENTS = [IfLeft, IfRight, IfSome, IfNone];
    var NgxFpTsModule = /** @class */ (function () {
        function NgxFpTsModule() {
        }
        return NgxFpTsModule;
    }());
    NgxFpTsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxFpTsModule });
    NgxFpTsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxFpTsModule_Factory(t) { return new (t || NgxFpTsModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFpTsModule, { declarations: [IfLeft, IfRight, IfSome, IfNone], exports: [IfLeft, IfRight, IfSome, IfNone] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxFpTsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IfLeft = IfLeft;
    exports.IfNone = IfNone;
    exports.IfRight = IfRight;
    exports.IfSome = IfSome;
    exports.NgxFpTsModule = NgxFpTsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-fp-ts.umd.js.map
