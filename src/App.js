import Footer from "./layout/footer/index.jsx";
import Navbar from "./layout/navbar/index.jsx";
import "./scss/main.scss";

import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Aboutus from "./pages/aboutus/index.jsx";
import StaticContentHolder from "./layout/StaticContentHolder.jsx";

function App() {
  return (
    <>
      <StaticContentHolder>
        <Routes>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={Aboutus} exact />
          </Switch>
          <Footer />
        </Routes>
      </StaticContentHolder>
    </>
  );
}

export default App;
