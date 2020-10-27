import { NgModule } from '@angular/core';

import { IfLeft, IfRight } from './if-either';
import { IfSome, IfNone } from './if-option';

const COMPONENTS = [IfLeft, IfRight, IfSome, IfNone];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class NgxFpTsModule {}
