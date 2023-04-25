import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBoxsComponent } from './contact-boxs.component';

describe('ContactBoxsComponent', () => {
  let component: ContactBoxsComponent;
  let fixture: ComponentFixture<ContactBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBoxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
