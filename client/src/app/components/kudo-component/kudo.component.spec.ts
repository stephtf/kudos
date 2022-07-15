import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoComponent } from './kudo.component';

describe('KudoComponentComponent', () => {
  let component: KudoComponent;
  let fixture: ComponentFixture<KudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
