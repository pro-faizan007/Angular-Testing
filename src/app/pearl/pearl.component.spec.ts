import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearlComponent } from './pearl.component';

describe('PearlComponent', () => {
  let component: PearlComponent;
  let fixture: ComponentFixture<PearlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PearlComponent]
    });
    fixture = TestBed.createComponent(PearlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
