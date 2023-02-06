import React from "react"; 
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
        {/* <Routes>
          <Route>
            <Home />
          </Route>
        </Routes> */}
        <Routes>
          {/* <Route path={["/game/:id", "/"]} element={<Home />}>
          </Route> */}
          <Route path="/game/:id" element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
        {/* <Home /> */}
    </div>
  );
}

export default App;
