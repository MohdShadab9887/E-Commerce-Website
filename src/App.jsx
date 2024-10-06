import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FeatureProducts from "./components/FeatureProducts/FeatureProducts";
import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

function App() {
  const [count, setCount] = useState("0");

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <AppProvider>
          <Header count={count} setCount={setCount} />
          <Outlet />
          {/* <FeatureProducts/> */}
          <Footer />
        </AppProvider>
      </counterContext.Provider>
    </>
  );
}

export default App;
