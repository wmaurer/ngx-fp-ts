import { NgModule } from '@angular/core';
import { IfNoneDirective, IfSomeDirective } from './if-option';

const COMPONENTS = [IfSomeDirective, IfNoneDirective];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class NgxFpTsOptionModule {}
