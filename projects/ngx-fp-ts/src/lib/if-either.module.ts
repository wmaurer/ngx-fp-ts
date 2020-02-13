import { NgModule } from '@angular/core';
import { IfLeftDirective, IfRightDirective } from './if-either';

const COMPONENTS = [IfLeftDirective, IfRightDirective];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class NgxFpTsEitherModule {}
