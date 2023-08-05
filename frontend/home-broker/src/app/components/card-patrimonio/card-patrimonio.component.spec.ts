import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPatrimonioComponent } from './card-patrimonio.component';

describe('CardPatrimonioComponent', () => {
  let component: CardPatrimonioComponent;
  let fixture: ComponentFixture<CardPatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPatrimonioComponent]
    });
    fixture = TestBed.createComponent(CardPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
