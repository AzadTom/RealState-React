import React from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Home />
    </>
  );
}

export default App;
