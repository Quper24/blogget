import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { PostContextProvider } from './context/postContext';
import { TokenContextProvider } from './context/tokenContext';

const App = () => (
  <TokenContextProvider>
    <AuthContextProvider>
      <PostContextProvider>
        <Header />
        <Main />
      </PostContextProvider>
    </AuthContextProvider>
  </TokenContextProvider>
);

export default App;
