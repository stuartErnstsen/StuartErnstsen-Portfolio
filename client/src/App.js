import { useContext } from 'react';
import AppContext from './Context/AppContext'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import Showcase from './Components/Main/Showcase/Showcase';
// import Info from './Components/Main/Info/Info';
import './App.scss';
import './Components/Main/Main.scss'

const App = props => {
  const { headerRightView, headerLeftView } = useContext(AppContext);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
