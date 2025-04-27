import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTransformerComponent } from './string-transformer.component';

describe('StringTransformerComponent', () => {
  let component: StringTransformerComponent;
  let fixture: ComponentFixture<StringTransformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringTransformerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
