import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { NgxFpTsEitherModule, NgxFpTsOptionModule, NgxRemoteDataModule } from '../../../../dist/ngx-fp-ts';
import { NgxFpTsEitherModule, NgxFpTsOptionModule, NgxRemoteDataModule } from '../../../ngx-fp-ts/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxFpTsEitherModule, NgxFpTsOptionModule, NgxRemoteDataModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
