import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysListComponentComponent } from './days-list-component.component';

describe('DaysListComponentComponent', () => {
  let component: DaysListComponentComponent;
  let fixture: ComponentFixture<DaysListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
