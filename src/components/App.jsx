import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import Container from './ToDo/Container';
import ToDoEditor from './ToDo/ToDoEditor';
import ToDoFilter from './ToDo/ToDoFilter';
import ToDoList from './ToDo';
import ColorPicker from './ColorPicker';
import Form from './Form';
import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs/Tabs';
import css from './App.module.css';
// short roots for ToDoList, ColorPicker and Form
// due to re-export (index.js in component folder)

import { nanoid } from 'nanoid/non-secure';

import colors from 'data/colors.json';
import initialToDos from 'data/todos.json';
import tabs from 'data/tabs.json';

class App extends React.Component {
  state = {
    todos: initialToDos,
    filter: '',
    showModal: false,
    showClock: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  addTodo = text => {
    console.log(text);
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
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

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodosNumber = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  handleFormSubmit = data => {
    console.log(data);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  render() {
    const { todos, filter, showModal, showClock } = this.state;
    const totalTodosNumber = todos.length;
    const completedTodosNumber = this.getCompletedTodosNumber();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Counter />
        <Dropdown />
        <ColorPicker options={colors} />
        <Container>
          <div>
            <span className={css.span}>Total ToDo: {totalTodosNumber}</span>
            <span className={css.span}>
              Completed ToDo: {completedTodosNumber}
            </span>
            <span className={css.span}>
              Remains ToDo: {totalTodosNumber - completedTodosNumber}
            </span>
          </div>
          <ToDoEditor onSubmit={this.addTodo} />
          <ToDoFilter value={filter} onChange={this.changeFilter} />
          <ToDoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Container>
        <Form onSubmit={this.handleFormSubmit} />
        <div className={css.div}>
          <button
            className={css.button}
            type="button"
            onClick={this.toggleModal}
          >
            Open Modal
          </button>
        </div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2 className={css.title}>Hi, this is content of Modal window</h2>
            <p className={css.span}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              rem expedita, optio suscipit aliquid numquam at eos excepturi
              doloremque delectus saepe libero corporis? Deleniti ex tenetur
              inventore, error animi perferendis.
            </p>
            <button
              className={css.button}
              type="button"
              onClick={this.toggleModal}
            >
              Close Modal
            </button>
          </Modal>
        )}
        <div className={css.div}>
          <button
            className={css.button}
            type="button"
            onClick={this.toggleClock}
          >
            {showClock ? 'Hide Clock' : 'Show Clock'}
          </button>
          {showClock && <Clock />}
        </div>
        <Tabs items={tabs} />
      </>
    );
  }
}

export default App;
