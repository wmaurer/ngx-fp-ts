import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFpTsComponent } from './ngx-fp-ts.component';

describe('NgxFpTsComponent', () => {
  let component: NgxFpTsComponent;
  let fixture: ComponentFixture<NgxFpTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFpTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFpTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
