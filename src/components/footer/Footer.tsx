/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
  filterStatus: (status: string) => void;
}

export const Footer: React.FC<Props> = ({ todos, filterStatus }) => {
  const [statusFilter, setStatusFilter] = useState<
  'all' | 'active' | 'completed'
  >('all');

  const completedCount = todos.filter(todo => !todo.completed).length;


  const handleStatusChange = (status: 'all' | 'active' | 'completed') => {
    filterStatus(status);
    setStatusFilter(status);
  };

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${completedCount} items left`}
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={`filter__link ${statusFilter === 'all' ? 'selected' : ''}`}
          data-cy="FilterLinkAll"
          onClick={() => handleStatusChange('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${statusFilter === 'active' ? 'selected' : ''}`}
          data-cy="FilterLinkActive"
          onClick={() => handleStatusChange('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${statusFilter === 'completed' ? 'selected' : ''}`}
          data-cy="FilterLinkCompleted"
          onClick={() => handleStatusChange('completed')}
        >
          Completed
        </a>
      </nav>


      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
