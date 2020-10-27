import { ɵstringify as stringify } from '@angular/core';
export const initialIfContext = () => ({
    $implicit: null,
    ifTrue: false,
});
export const initialRefs = () => ({
    viewContainer: null,
    thenTemplateRef: null,
    elseTemplateRef: null,
    thenViewRef: null,
    elseViewRef: null,
});
export function updateView(context, refs) {
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
export function assertTemplate(property, templateRef) {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
    }
}
//# sourceMappingURL=common.js.map