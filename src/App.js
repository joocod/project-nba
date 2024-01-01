import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideo from './pages/Mainvideo';
import Descrip from './component/Descrip';

function App() {
  return (
      <>
        <GlobalStyle/>
        <Main/>
        <Search/>
        <Mainvideo/>
        <Descrip/>
      </>
  );
}

export default App;
