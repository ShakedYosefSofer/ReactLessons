import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Value from './components/Value';
import FoodsApi from './components/FoodsApi';
import Parent from './components/Parent';

function App() {
  return (
    <div className="container">
      <Parent>
        <p>Hello</p>
      </Parent>
      <Parent>
        <h2>Bye bye</h2>
      </Parent>
      <Parent>
        <Counter />
      </Parent>
      <hr/>
      <FoodsApi />
      <hr/>
      <Value />
      <hr/>
      <Message txt="Hello"/>
      <Message txt="Bye"/>
      <hr/>
      <Counter />
    
    </div>
  );
}

export default App;
