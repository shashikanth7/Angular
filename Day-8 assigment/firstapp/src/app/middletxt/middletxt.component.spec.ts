import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddletxtComponent } from './middletxt.component';

describe('MiddletxtComponent', () => {
  let component: MiddletxtComponent;
  let fixture: ComponentFixture<MiddletxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddletxtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddletxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
