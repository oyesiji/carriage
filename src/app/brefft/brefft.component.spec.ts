import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrefftComponent } from './brefft.component';

describe('BrefftComponent', () => {
  let component: BrefftComponent;
  let fixture: ComponentFixture<BrefftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrefftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrefftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
