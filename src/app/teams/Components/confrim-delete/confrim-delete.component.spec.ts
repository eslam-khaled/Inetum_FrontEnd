import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrimDeleteComponent } from './confrim-delete.component';

describe('ConfrimDeleteComponent', () => {
  let component: ConfrimDeleteComponent;
  let fixture: ComponentFixture<ConfrimDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrimDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
