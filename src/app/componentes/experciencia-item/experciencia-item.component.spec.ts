import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpercienciaItemComponent } from './experciencia-item.component';

describe('ExpercienciaItemComponent', () => {
  let component: ExpercienciaItemComponent;
  let fixture: ComponentFixture<ExpercienciaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpercienciaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpercienciaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
