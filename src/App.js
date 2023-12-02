import './App.css';
import { Route, Routes } from 'react-router';
import Form from './components/Form'
import Header from './components/Header';

function App() {

  return (
      <>
      <Header />
    <main className="App">
      <Form/>
    </main>
    </>
  );
}

export default App;
