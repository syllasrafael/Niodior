import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosVendaComponent } from './pos-venda.component';

describe('PosVendaComponent', () => {
  let component: PosVendaComponent;
  let fixture: ComponentFixture<PosVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosVendaComponent]
    });
    fixture = TestBed.createComponent(PosVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
