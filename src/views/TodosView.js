import { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { fetchTodos } from '../redux/todos/todos-operations';
import { getLoading } from '../redux/todos/todos-selectors';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export const TodosView = params => {
  // const dispatch = useDispatch();
  const isLoadingTodos = useSelector(getLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  // useEffect(() => dispatch(fetchTodos()), [dispatch]);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Add photo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Loading...</h1>}
      </div>

      <TodoList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};
