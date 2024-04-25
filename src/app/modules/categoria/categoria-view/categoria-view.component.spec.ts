import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaViewComponent } from './categoria-view.component';

describe('CategoriaViewComponent', () => {
  let component: CategoriaViewComponent;
  let fixture: ComponentFixture<CategoriaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
