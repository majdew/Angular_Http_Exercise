import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialviewComponent } from './materialview.component';

describe('MaterialviewComponent', () => {
  let component: MaterialviewComponent;
  let fixture: ComponentFixture<MaterialviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
