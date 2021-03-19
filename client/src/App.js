import './App.scss';
import { useContext } from 'react';
import AppContext from './Context/appContext';
import Header from './Components/Header/Header';

function App() {
  const { test } = useContext(AppContext)
  return (
    <Header />
  );
}

export default App;
