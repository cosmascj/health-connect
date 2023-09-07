import AuthContextProvider from './src/contexts/AuthContext';
import LoadApp from './src/core/LoadApp';

export default function App() {


  return (
    <AuthContextProvider>
      <LoadApp />
    </AuthContextProvider>
  );
}

