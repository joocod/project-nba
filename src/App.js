import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Main from './pages/Main';
import Search from './component/Search';
import Mainvideo from './pages/Mainvideo';
import Descrip from './component/Descrip';
import Community from './pages/Community';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle/>
            <Main/>
              <Search/>
              <Mainvideo/>
            <Descrip/>
          <Community/>
        </QueryClientProvider>
      </>
  );
}

export default App;
