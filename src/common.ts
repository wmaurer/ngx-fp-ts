import { EmbeddedViewRef, TemplateRef, ViewContainerRef, ɵstringify as stringify } from '@angular/core';

export interface IfContext<T = unknown> {
    $implicit: T;
    ifTrue: boolean;
}

export const initialIfContext = <T>(): IfContext<T> => ({
    $implicit: null!,
    ifTrue: false,
});

export interface Refs {
    viewContainer: ViewContainerRef | null;
    thenTemplateRef: TemplateRef<IfContext> | null;
    elseTemplateRef: TemplateRef<IfContext> | null;
    thenViewRef: EmbeddedViewRef<IfContext> | null;
    elseViewRef: EmbeddedViewRef<IfContext> | null;
}
export const initialRefs = (): Refs => ({
    viewContainer: null,
    thenTemplateRef: null,
    elseTemplateRef: null,
    thenViewRef: null,
    elseViewRef: null,
});

export function updateView(context: IfContext, refs: Refs) {
    if (context.ifTrue) {
        if (!refs.thenViewRef && refs.viewContainer) {
            refs.viewContainer.clear();
            refs.elseViewRef = null;
            if (refs.thenTemplateRef) {
                refs.thenViewRef = refs.viewContainer.createEmbeddedView(refs.thenTemplateRef, context);
            }
        }
    } else {
        if (!refs.elseViewRef && refs.viewContainer) {
            refs.viewContainer.clear();
            refs.thenViewRef = null;
            if (refs.elseTemplateRef) {
                refs.elseViewRef = refs.viewContainer.createEmbeddedView(refs.elseTemplateRef, context);
            }
        }
    }
}

export function assertTemplate(property: string, templateRef: TemplateRef<any> | null): void {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
    }
}
