import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import Home from './pages/Home';
import Rapports from './pages/Rapports';
import Impostors from './pages/Impostors';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ComingSoon from './pages/ComingSoon';

function App() {


  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rapports" element={<Rapports />} />
          <Route exact path="/rapports/impostors" element={<Impostors/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/rapports/comingSoon" element={<ComingSoon/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
