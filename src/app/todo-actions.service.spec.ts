import { TestBed } from '@angular/core/testing';

import { TodoActionsService } from './todo-actions.service';

describe('TodoActionsService', () => {
  let service: TodoActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
