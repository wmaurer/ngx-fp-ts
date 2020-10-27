import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';
export interface IfContext {
    $implicit: any;
    ifTrue: boolean;
}
export declare const initialIfContext: () => IfContext;
export interface Refs {
    viewContainer: ViewContainerRef;
    thenTemplateRef: TemplateRef<IfContext> | null;
    elseTemplateRef: TemplateRef<IfContext> | null;
    thenViewRef: EmbeddedViewRef<IfContext> | null;
    elseViewRef: EmbeddedViewRef<IfContext> | null;
}
export declare const initialRefs: () => Refs;
export declare function updateView(context: IfContext, refs: Refs): void;
export declare function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void;
//# sourceMappingURL=common.d.ts.map