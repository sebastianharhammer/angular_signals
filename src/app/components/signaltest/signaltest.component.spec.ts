import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaltestComponent } from './signaltest.component';

describe('SignaltestComponent', () => {
  let component: SignaltestComponent;
  let fixture: ComponentFixture<SignaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaltestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
