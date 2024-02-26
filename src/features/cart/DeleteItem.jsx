import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem(e) {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
