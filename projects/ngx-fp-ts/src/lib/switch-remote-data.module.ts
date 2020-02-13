import { NgModule } from '@angular/core';
import {
    CaseRemoteDataPendingDirective,
    CaseRemoteDataSuccessDirective,
    SwitchRemoteDataDirective,
} from './switch-remote-data';

const COMPONENTS = [CaseRemoteDataPendingDirective, CaseRemoteDataSuccessDirective, SwitchRemoteDataDirective];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
})
export class NgxRemoteDataModule {}
