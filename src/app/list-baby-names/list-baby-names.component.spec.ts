import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBabyNamesComponent } from './list-baby-names.component';

describe('ListBabyNamesComponent', () => {
  let component: ListBabyNamesComponent;
  let fixture: ComponentFixture<ListBabyNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBabyNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBabyNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
