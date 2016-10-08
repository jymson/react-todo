export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

//toggleShowCompleted TOGGLE_SHOW_COMPLETED 
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

//toggleTodo(id) toggleTodo
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};