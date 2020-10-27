import { ViewContainerRef, TemplateRef } from '@angular/core';
import { Either } from 'fp-ts/Either';
import { IfContext } from './common';
import * as i0 from "@angular/core";
export declare class IfRight {
    private context;
    private refs;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>);
    set ifRight(either: Either<any, any>);
    set ifRightThen(templateRef: TemplateRef<IfContext> | null);
    set ifRightElse(templateRef: TemplateRef<IfContext> | null);
    static ɵfac: i0.ɵɵFactoryDef<IfRight, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IfRight, "[ifRight]", never, { "ifRight": "ifRight"; "ifRightThen": "ifRightThen"; "ifRightElse": "ifRightElse"; }, {}, never>;
}
export declare class IfLeft {
    private context;
    private refs;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>);
    set ifLeft(either: Either<any, any>);
    set ifLeftThen(templateRef: TemplateRef<IfContext> | null);
    set ifLeftElse(templateRef: TemplateRef<IfContext> | null);
    static ɵfac: i0.ɵɵFactoryDef<IfLeft, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IfLeft, "[ifLeft]", never, { "ifLeft": "ifLeft"; "ifLeftThen": "ifLeftThen"; "ifLeftElse": "ifLeftElse"; }, {}, never>;
}
//# sourceMappingURL=if-either.d.ts.map