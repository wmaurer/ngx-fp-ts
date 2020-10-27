import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Option } from 'fp-ts/Option';
import { IfContext } from './common';
import * as i0 from "@angular/core";
export declare class IfSome {
    private context;
    private refs;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>);
    set ifSome(option: Option<any>);
    set ifSomeThen(templateRef: TemplateRef<IfContext> | null);
    set ifSomeElse(templateRef: TemplateRef<IfContext> | null);
    static ɵfac: i0.ɵɵFactoryDef<IfSome, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IfSome, "[ifSome]", never, { "ifSome": "ifSome"; "ifSomeThen": "ifSomeThen"; "ifSomeElse": "ifSomeElse"; }, {}, never>;
}
export declare class IfNone {
    private context;
    private refs;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext>);
    set ifNone(option: Option<any>);
    set ifNoneThen(templateRef: TemplateRef<IfContext> | null);
    set ifNoneElse(templateRef: TemplateRef<IfContext> | null);
    static ɵfac: i0.ɵɵFactoryDef<IfNone, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<IfNone, "[ifNone]", never, { "ifNone": "ifNone"; "ifNoneThen": "ifNoneThen"; "ifNoneElse": "ifNoneElse"; }, {}, never>;
}
//# sourceMappingURL=if-option.d.ts.map