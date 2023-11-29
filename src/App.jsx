import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";
import AOS from "aos";
import Home from "./pages/Home";
import Rapports from "./pages/Rapports";
import RapportDetails from "./pages/RapportDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ComingSoon from "./pages/ComingSoon";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(useSelector((state) => state.expiresIn));
  console.log(isLoggedIn);

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/rapports" element={<Rapports />} />
          <Route
            exact
            path="/rapports/impostors"
            element={<RapportDetails />}
          />
          <Route exact path="/rapports/bigTime" element={<RapportDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/rapports/comingSoon" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/home" element={<SignIn />} />
          <Route exact path="/rapports" element={<SignIn />} />
          <Route exact path="/rapports/impostors" element={<SignIn />} />
          <Route exact path="/rapports/bigTime" element={<SignIn />} />
          <Route exact path="/contact" element={<SignIn />} />
          <Route exact path="/rapports/comingSoon" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
