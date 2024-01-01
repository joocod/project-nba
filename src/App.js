import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideo from './pages/Mainvideo';
import Descrip from './component/Descrip';
import ShortForm from './component/ShortForm';

function App() {
  return (
      <>
        <GlobalStyle/>
        <Main/>
        <Search/>
        <Mainvideo/>
        <Descrip/>
        <ShortForm/>
      </>
  );
}

export default App;
