import { NextUIProvider } from "@nextui-org/react";
import Router from "@Routes/Router";

function App() {
  return (
    <NextUIProvider>
      <Router />
    </NextUIProvider>
  );
}

export default App;
