import "./App.css";
import "antd/dist/antd.css";
import "react-quill/dist/quill.snow.css";

import Routes from "router";
import { ContextProvider } from "context/GlobalState";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </div>
  );
}

export default App;
