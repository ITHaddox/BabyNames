import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyNameComponent } from './baby-name.component';

describe('BabyNameComponent', () => {
  let component: BabyNameComponent;
  let fixture: ComponentFixture<BabyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
