import Router from "@Routes/Router";
import { AuthProvider } from "@Contexts/Auth";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
