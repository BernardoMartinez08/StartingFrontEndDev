import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonClearComponent } from './boton-clear.component';

describe('BotonClearComponent', () => {
  let component: BotonClearComponent;
  let fixture: ComponentFixture<BotonClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonClearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
