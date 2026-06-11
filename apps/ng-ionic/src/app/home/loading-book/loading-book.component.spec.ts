import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBookComponent } from './loading-book.component';

describe('LoadingBookComponent', () => {
  let component: LoadingBookComponent;
  let fixture: ComponentFixture<LoadingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
