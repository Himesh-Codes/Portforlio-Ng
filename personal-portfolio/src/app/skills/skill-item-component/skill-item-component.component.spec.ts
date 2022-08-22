import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemComponentComponent } from './skill-item-component.component';

describe('SkillItemComponentComponent', () => {
  let component: SkillItemComponentComponent;
  let fixture: ComponentFixture<SkillItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillItemComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
