import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ToDoList from './ToDoList';
import ColorPicker from './ColorPicker';
import Form from './Form';
// short roots for ToDoList, ColorPicker and Form
// due to re-export (index.js in component folder)

import colors from 'data/colors.json';
import initialToDos from 'data/todos.json';

class App extends React.Component {
  state = {
    todos: initialToDos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  // in setState functions we don't use push/slice methods,
  // but map, filter, reduce. We don't mutate existing collection,
  // but return new one.

  toggleCompleted = todoId => {
    console.log(todoId);
    // Option #1
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('we found those we need!');
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    // Option #2
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleFormSubmit = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    const totalTodosNumber = todos.length;
    const completedTodosNumber = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <Counter />
        <Dropdown />
        <ColorPicker options={colors} />
        <div>
          <span>Total ToDo:{totalTodosNumber}</span>
          <span>Completed ToDo:{completedTodosNumber}</span>
          <span>Remains ToDo:{totalTodosNumber - completedTodosNumber}</span>
        </div>
        <ToDoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <Form onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

export default App;
