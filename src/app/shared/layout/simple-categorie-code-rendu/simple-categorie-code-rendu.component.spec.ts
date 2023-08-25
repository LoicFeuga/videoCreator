import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCategorieCodeRenduComponent } from './simple-categorie-code-rendu.component';

describe('SimpleCategorieCodeRenduComponent', () => {
  let component: SimpleCategorieCodeRenduComponent;
  let fixture: ComponentFixture<SimpleCategorieCodeRenduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleCategorieCodeRenduComponent]
    });
    fixture = TestBed.createComponent(SimpleCategorieCodeRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
