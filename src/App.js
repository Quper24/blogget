import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { PostContextProvider } from './context/postContext';
import { TokenContextProvider } from './context/tokenContext';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Header />
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  </Provider>
);

export default App;
