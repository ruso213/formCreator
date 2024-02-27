import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonInitComponent } from './buttonInit.component';

describe('ButtonInitComponent', () => {
  let component: ButtonInitComponent;
  let fixture: ComponentFixture<ButtonInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonInitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
