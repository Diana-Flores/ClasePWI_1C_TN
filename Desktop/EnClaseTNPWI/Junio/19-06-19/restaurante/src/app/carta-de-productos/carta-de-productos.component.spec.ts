import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDeProductosComponent } from './carta-de-productos.component';

describe('CartaDeProductosComponent', () => {
  let component: CartaDeProductosComponent;
  let fixture: ComponentFixture<CartaDeProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaDeProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
