import React from "react";
import Main from "./pages/Main";
import { ContextWrapper } from "./Context";

export const App = () => {
  return (
    <ContextWrapper>
      <Main />
    </ContextWrapper>
  );
};

export default App;
