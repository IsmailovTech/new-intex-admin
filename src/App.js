
 import UnAuthenticatedApp from './UnAuthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const token = true;
  if(token) {
    return <AuthenticatedApp/>
  }else {
    return <UnAuthenticatedApp/>
  }
}


export default App;
