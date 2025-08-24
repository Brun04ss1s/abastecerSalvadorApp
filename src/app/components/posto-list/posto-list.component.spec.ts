import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoListComponent } from './posto-list.component';

describe('PostoList', () => {
  let component: PostoListComponent;
  let fixture: ComponentFixture<PostoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
