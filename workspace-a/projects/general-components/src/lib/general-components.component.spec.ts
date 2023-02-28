import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponentsComponent } from './general-components.component';

describe('GeneralComponentsComponent', () => {
  let component: GeneralComponentsComponent;
  let fixture: ComponentFixture<GeneralComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
