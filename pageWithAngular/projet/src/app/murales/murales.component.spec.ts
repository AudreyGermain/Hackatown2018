import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralesComponent } from './murales.component';

describe('MuralesComponent', () => {
  let component: MuralesComponent;
  let fixture: ComponentFixture<MuralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
