import ToDoList from '../to-do/list';
import { Greetings } from '../UI/greetings';

const Container = () => {
  return (
    <div className="content-container">
      <Greetings />

      <ToDoList />
    </div>
  );
};

export default Container;
