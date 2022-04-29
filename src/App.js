import './App.css';
import ToDoAdd from './components/ToDoAdd';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='appbody'>
      <div className='container'>
        <div className='appdiv'>
          <h2 className='heading' >What are you doing today?</h2>
          <ToDoAdd></ToDoAdd>
          <ToDoList></ToDoList>
        </div>
      </div>
    </div>

  );
}

export default App;
