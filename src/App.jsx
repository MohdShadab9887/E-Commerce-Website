import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FeatureProducts from "./components/FeatureProducts/FeatureProducts";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

function App() {
  const [count, setCount] = useState("0");
  // const [profile, setProfile] = useState()
  // useEffect(() => {

  // setprofile(user)
  // console.log(profile)
  // }, [user])

  return (
    <>
      <Auth0Provider
        domain="dev-aq7s105pwfuq50wd.us.auth0.com"
        clientId="Tv0ZBDL9PI3rJo1MBqeJ7jopUPlvzlqs"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <counterContext.Provider value={{ count, setCount }}>
          <AppProvider>
            <Header count={count} setCount={setCount} />
            <Outlet />
            {/* <FeatureProducts/> */}
            <Footer />
          </AppProvider>
        </counterContext.Provider>
      </Auth0Provider>
    </>
  );
}

export default App;
