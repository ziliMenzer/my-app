import Counter from './comps/counter';
import './App.css';
import InputVal from './comps/inputVal';
import Message from './comps/message';

function App() {
  return (
    <div className="container">
      <h1 className='text-danger'>React</h1>
      <Message txt66="first 11111" />
      <Message txt66="last 2222" />
      <Counter />
      <InputVal />
    </div>
  );
}

export default App;
