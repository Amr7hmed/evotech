import Footer from "./layout/footer/index.jsx";
import Navbar from "./layout/navbar/index.jsx";
import "./scss/main.scss";

import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Aboutus from "./pages/about/index.jsx";
import StaticContentHolder from "./layout/StaticContentHolder.jsx";
import WebSolutions from "./pages/services/web_solutions.jsx";
import Blogs from "./pages/blogs/index.jsx"
import Blog from "./pages/blog/index.jsx";
import ContactUs from "./pages/contact/index.jsx";
import ButtonsWhatsapp from "./components/public/buttonswhatsapp.jsx";

function App() {
  return (
    <>
      <StaticContentHolder>
        <Routes>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={Aboutus} exact />
            <Route path="/websolutions" component={WebSolutions} exact />
            <Route path="/blogs" component={Blogs} exact />
            <Route path="/blog" component={Blog} exact />
            <Route path="/contactus" component={ContactUs} exact />
            
          </Switch>
          <ButtonsWhatsapp/>
          <Footer />
        </Routes>
      </StaticContentHolder>
    </>
  );
}

export default App;
