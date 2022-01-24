import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBooKingRequestComponent } from './room-boo-king-request.component';

describe('RoomBooKingRequestComponent', () => {
  let component: RoomBooKingRequestComponent;
  let fixture: ComponentFixture<RoomBooKingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBooKingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBooKingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
