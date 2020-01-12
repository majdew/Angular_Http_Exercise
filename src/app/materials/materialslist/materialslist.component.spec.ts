import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialslistComponent } from './materialslist.component';

describe('MaterialslistComponent', () => {
  let component: MaterialslistComponent;
  let fixture: ComponentFixture<MaterialslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
