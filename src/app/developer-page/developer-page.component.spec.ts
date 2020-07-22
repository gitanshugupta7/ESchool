import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPageComponent } from './developer-page.component';

describe('DeveloperPageComponent', () => {
  let component: DeveloperPageComponent;
  let fixture: ComponentFixture<DeveloperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
