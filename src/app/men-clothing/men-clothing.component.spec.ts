import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MenClothingComponent } from './men-clothing.component';

describe('MenClothingComponent', () => {
  let component: MenClothingComponent;
  let fixture: ComponentFixture<MenClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
