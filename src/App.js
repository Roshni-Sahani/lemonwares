import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hoisting from './Components/Hoisting';
import Hoisting2map from './Components/Hoisting2map';
import Mynav from './Components/Mynav';
import Toggle from './Components/Toggle';
import Reals from './Components/Reals';
import Website from './Components/Website';
import Awesomeweb from './Components/Awesomeweb';
import Backtotop from './Components/Backtop';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.body.classList.add("overflow-hidden");
function App() {
    const [data, setdata] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init(
      { once: true }
    );
  }, [])
  
  
  return (
    <div className="App overflow-x-clip">
      {data && <Loader/>}
      <Mynav />
      <Header/>
      <Hoisting />
      <Hoisting2map />
      <Toggle />
      <Reals />
      <Website />
      <Awesomeweb/>
      <Footer />
      <Backtotop/>
    </div>
  );
}

export default App;
