import { NgModule } from '@angular/core';
import { IfLeft, IfRight } from './if-either';
import { IfSome, IfNone } from './if-option';
import * as i0 from "@angular/core";
const COMPONENTS = [IfLeft, IfRight, IfSome, IfNone];
export class NgxFpTsModule {
}
NgxFpTsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxFpTsModule });
NgxFpTsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxFpTsModule_Factory(t) { return new (t || NgxFpTsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFpTsModule, { declarations: [IfLeft, IfRight, IfSome, IfNone], exports: [IfLeft, IfRight, IfSome, IfNone] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxFpTsModule, [{
        type: NgModule,
        args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=ngx-fp-ts.module.js.map