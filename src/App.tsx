import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// 🔁 Regular import for loading screen
import CenterLoading from "./components/Loading/CenterLoading";

const Home = React.lazy(() => import("./components/home/Home"));
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<CenterLoading />}>
                <Home />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
