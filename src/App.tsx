import Container from './app/components/container';
import { Navbar } from './app/components/navbar';
import ToDo from './app/context/ToDoContext';
import './styles/css/main.css';

const App = () => {
  return (
    <ToDo>
      <Navbar />

      <Container />
    </ToDo>
  );
};

export default App;
